import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    customer: {
        name: String,
        phoneNumber: String,
        email: String,
        address: String,
    },
    products: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
          min: 1,
        },
        price: {
          type: Number,
          required: true,
          min: 0,
        },
      },
    ],
    totalAmount: {
      type: Number,
      required: true,
      min: 0,
    },
    paymentStatus: {
      type: String,
      enum: ["pending", "paid", "failed"],
      default: "pending",
    },
    paymentMethod: {
      type: String,
      enum: ["Telebirr", "Chapa", "COD"],
      default: "COD",
    },
    paymentReference: {
      type: String,
      default: "",
    },
    paymentProvider: {
      type: String,
      enum: ["chapa", "none"],
      default: "none",
    },
    paymentUrl: {
      type: String,
      default: "",
    },
    paidAt: {
      type: Date,
    },
    orderStatus: {
      type: String,
      enum: ["processing", "shipped", "delivered", "canceled","pending", "failed", "on hold", "returned"],
      default: "processing",
    },
  },
  { timestamps: true }
);
const Order = mongoose.model("Order", orderSchema);

export default Order;