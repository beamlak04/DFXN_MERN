import Order from "../models/order.model.js";
import {
  initializeChapaPayment,
  validateChapaCallbackSignature,
  verifyChapaPayment,
} from "../lib/chapa.js";
import { recordAuditEvent } from "../lib/auditLogger.js";

const buildCallbackUrl = (req) => {
  if (process.env.CHAPA_CALLBACK_URL) {
    return process.env.CHAPA_CALLBACK_URL;
  }

  return `${req.protocol}://${req.get("host")}/api/orders/payment/callback`;
};

const buildReturnUrl = () => {
  if (process.env.CHAPA_RETURN_URL) {
    return process.env.CHAPA_RETURN_URL;
  }

  const fallbackClientUrl = process.env.CLIENT_URLS?.split(",")?.[0]?.trim();
  return `${fallbackClientUrl || "http://localhost:5173"}/payment-result`;
};

const buildReturnUrlWithTxRef = (txRef) => {
  const returnUrl = new URL(buildReturnUrl());
  returnUrl.searchParams.set("tx_ref", txRef);
  return returnUrl.toString();
};

const isWebhookFirstEnabled = () => {
  return String(process.env.CHAPA_WEBHOOK_FIRST || "true").toLowerCase() === "true";
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const SUCCESS_STATUSES = new Set(["success"]);
const FAILED_STATUSES = new Set([
  "failed",
  "canceled",
  "cancelled",
  "declined",
  "expired",
  "error",
  "timeout",
]);

const normalizeChapaStatus = (status) => String(status || "").trim().toLowerCase();

const getNameParts = (name = "") => {
  const parts = String(name).trim().split(" ").filter(Boolean);
  if (parts.length === 0) {
    return { firstName: "Customer", lastName: "" };
  }

  if (parts.length === 1) {
    return { firstName: parts[0], lastName: "" };
  }

  return {
    firstName: parts[0],
    lastName: parts.slice(1).join(" "),
  };
};

export const placeOrder = async (req, res) => {
  try {
    const orderData = req.body;
    if (!Array.isArray(orderData?.cart) || orderData.cart.length === 0) {
      return res.status(400).json({ message: "cart is empty" });
    }

    const products = orderData.cart.map((item) => ({
      product: item._id,
      quantity: item.quantity,
      price: item.price,
    }));

    const totalAmount = products.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    const paymentMethod = ["COD", "Chapa", "Telebirr"].includes(orderData.paymentMethod)
      ? orderData.paymentMethod
      : "COD";

    const paymentProvider = paymentMethod === "COD" ? "none" : "chapa";

    const orderPayload = {
      customer: orderData.customer,
      products,
      totalAmount,
      paymentMethod,
      paymentProvider,
    };

    if (paymentMethod !== "COD") {
      orderPayload.orderStatus = "pending";
    }

    const order = await Order.create(orderPayload);

    await recordAuditEvent({
      user: {
        _id: null,
        name: orderData?.customer?.name || "Guest",
        email: orderData?.customer?.email || "",
        role: "customer",
      },
      req,
      action: "order.created",
      resource: "orders/place-order",
      metadata: {
        orderId: order._id,
        paymentMethod,
        paymentProvider,
        totalAmount,
      },
    });

    if (paymentMethod === "COD") {
      return res.status(201).json({ order, message: "order placed successfully" });
    }

    const { firstName, lastName } = getNameParts(orderData?.customer?.name);
    const txRef = `ORDER-${order._id}-${Date.now()}`;

    const providedEmail = String(orderData?.customer?.email || "").trim();
    const chapaEmail = emailPattern.test(providedEmail)
      ? providedEmail
      : process.env.CHAPA_DEFAULT_EMAIL || "chapa.test@gmail.com";

    const chapaResponse = await initializeChapaPayment({
      amount: totalAmount,
      email: chapaEmail,
      firstName,
      lastName,
      phoneNumber: orderData?.customer?.phoneNumber,
      txRef,
      callbackUrl: buildCallbackUrl(req),
      returnUrl: buildReturnUrlWithTxRef(txRef),
      customization: {
        title: "DFXN Payment",
        description: `Order ${String(order._id).slice(-6)} payment`,
      },
      paymentMethod,
    });

    const checkoutUrl = chapaResponse?.data?.checkout_url;
    if (!checkoutUrl) {
      await Order.findByIdAndUpdate(order._id, {
        paymentStatus: "failed",
        orderStatus: "failed",
      });
      return res.status(502).json({ message: "Failed to initialize payment" });
    }

    order.paymentReference = txRef;
    order.paymentUrl = checkoutUrl;
    await order.save();

    return res.status(201).json({
      order,
      message: "Order created. Complete payment to confirm your order.",
      paymentUrl: checkoutUrl,
      txRef,
    });
  } catch (error) {
    console.log("error in order place backend ", error.message);
    return res.status(500).json({ message: error.message });
  }

  // const {customerName, customerEmail, customerPhoneNumber, customerAddress} = orderData.customer;
  // console.log(customerName, customerEmail, customerPhoneNumber, customerAddress);
};
export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().lean().sort({ createdAt: -1 });
    res.status(200).json({ orders });
  } catch (error) {
    console.log("erron in getAllOrders", error.message);
    res.status(500).json({ message: error.message });
  }
};

export const verifyOrderPayment = async (req, res) => {
  try {
    const txRef = req.query.tx_ref || req.body?.tx_ref;
    if (!txRef) {
      return res.status(400).json({ message: "tx_ref is required" });
    }

    const order = await Order.findOne({ paymentReference: txRef });
    if (!order) {
      return res.status(404).json({ message: "Order not found for this payment reference" });
    }

    if (order.paymentStatus === "paid") {
      return res.status(200).json({
        message: "Payment already confirmed",
        paid: true,
        pending: false,
        order,
        source: "database",
      });
    }

    const verification = await verifyChapaPayment(txRef);
    const status = normalizeChapaStatus(verification?.data?.status);
    const amount = Number(verification?.data?.amount || 0);

    if (SUCCESS_STATUSES.has(status) && amount >= order.totalAmount) {
      order.paymentStatus = "paid";
      order.orderStatus = "processing";
      order.paidAt = new Date();
      await order.save();

      return res.status(200).json({
        message: "Payment verified successfully",
        paid: true,
        pending: false,
        order,
        source: "chapa",
      });
    }

    if (FAILED_STATUSES.has(status)) {
      order.paymentStatus = "failed";
      order.orderStatus = "failed";
      await order.save();

      return res.status(200).json({
        message: "Payment failed",
        paid: false,
        failed: true,
        pending: false,
        order,
        source: "chapa",
      });
    }

    return res.status(200).json({
      message: "Payment is still pending confirmation",
      paid: false,
      failed: false,
      pending: true,
      order,
      source: "chapa",
    });
  } catch (error) {
    console.log("error in verifyOrderPayment", error.message);
    return res.status(500).json({ message: error.message });
  }
};

export const getPaymentResult = async (req, res) => {
  try {
    const txRef = req.query.tx_ref;
    if (!txRef) {
      return res.status(400).json({ message: "tx_ref is required" });
    }

    const order = await Order.findOne({ paymentReference: txRef }).lean();
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    const paid = order.paymentStatus === "paid";
    const failed = order.paymentStatus === "failed";

    return res.status(200).json({
      paid,
      failed,
      pending: !paid && !failed,
      order,
      message: paid
        ? "Payment confirmed"
        : failed
        ? "Payment failed"
        : "Payment is pending callback confirmation",
    });
  } catch (error) {
    console.log("error in getPaymentResult", error.message);
    return res.status(500).json({ message: error.message });
  }
};

export const chapaPaymentCallback = async (req, res) => {
  try {
    const signatureHeader = process.env.CHAPA_SIGNATURE_HEADER || "x-chapa-signature";
    const signature = req.get(signatureHeader);
    const signatureValid = validateChapaCallbackSignature({
      rawBody: req.rawBody,
      signature,
    });

    if (!signatureValid) {
      console.log("warning: chapa callback signature could not be validated, falling back to tx_ref verification");
    }

    const txRef = req.body?.tx_ref || req.query?.tx_ref;
    if (!txRef) {
      return res.status(400).json({ message: "tx_ref is required" });
    }

    const order = await Order.findOne({ paymentReference: txRef });
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    const verification = await verifyChapaPayment(txRef);
    const status = normalizeChapaStatus(verification?.data?.status);
    const amount = Number(verification?.data?.amount || 0);

    if (SUCCESS_STATUSES.has(status) && amount >= order.totalAmount) {
      order.paymentStatus = "paid";
      order.orderStatus = "processing";
      order.paidAt = new Date();
    } else if (FAILED_STATUSES.has(status)) {
      order.paymentStatus = "failed";
      order.orderStatus = "failed";
    }

    await order.save();

    await recordAuditEvent({
      user: {
        _id: order.customer?._id || null,
        name: order.customer?.name || "Customer",
        email: order.customer?.email || "",
        role: "customer",
      },
      req,
      action: "order.payment.callback",
      resource: "orders/payment/callback",
      metadata: {
        orderId: order._id,
        paymentStatus: order.paymentStatus,
        orderStatus: order.orderStatus,
      },
    });

    return res.status(200).json({ message: "Callback processed" });
  } catch (error) {
    console.log("error in chapaPaymentCallback", error.message);
    return res.status(500).json({ message: error.message });
  }
};

export const getOrderById = async (req, res) => {
  try {
    const order = await Order.findOne({ _id: req.params.id })
      .populate({
        path: "products.product",
        select: "name image",
      })
      .lean();
    if (!order) {
      return res.status(404).json({ message: "order not found " });
    }
    return res.status(200).json(order);
  } catch (error) {
    console.log("error in getting order: ", error.message);
    return res.status(500).json({ message: error.message });
  }
};

export const editOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate({
      path: "products.product",
      select: "name image",
    });
    const updatedOrderData = req.body;
    if (!order) {
      return res.status(404).json({ message: "order not found" });
    }
    if (
      !Array.isArray(updatedOrderData.products) ||
      updatedOrderData.products.length === 0
    ) {
      order.orderStatus = "canceled";
      await order.save();
      return res.status(200).json({ message: "Canceled the order" });
    } else {
      order.customer = updatedOrderData.customer;
      order.products = updatedOrderData.products;
      order.orderStatus = updatedOrderData.orderStatus;
      order.paymentMethod = updatedOrderData.paymentMethod;
      order.paymentStatus = updatedOrderData.paymentStatus;
      order.totalAmount = 0;
      updatedOrderData.products.forEach((item) => {
        order.totalAmount += item.quantity * item.price;
      });
    }
    await order.save();
    res.status(200).json({ message: "Saved changes", order });
  } catch (error) {
    console.log("error in editOrder: ", error.message);
    res.status(500).json({ message: error.message });
  }
};

export const deleteOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    await Order.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Order deleted Successfully" });
  } catch (error) {
    console.log("error deleting order", error.message);
    res.status(500).json({ message: error.message });
  }
};
