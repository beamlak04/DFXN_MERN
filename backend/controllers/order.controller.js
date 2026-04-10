import Order from "../models/order.model.js";

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

    const order = await Order.create({
      customer: orderData.customer,
      products,
      totalAmount,
    });

    res.status(201).json({ order, message: "order placed successfully" });
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
