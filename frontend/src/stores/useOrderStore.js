import { create } from "zustand";
import toast from "react-hot-toast";
import axios from "../lib/axios";
import { useContext } from "react";
import { CartContext } from "../pages/CartProvider";
import { clearCart } from "./useCartStore";

export const useOrderStore = create((set) => ({
  loading: false,
  orders: [],
  setOrders: (orders) => {
    set({ orders });
  },
  placeOrder: async (orderData) => {
    set({ loading: true });
    try {
      const response = await axios.post("/orders/place-order", orderData);
      console.log(response.data.message);
      toast.success(response.data.message);
      set({ loading: false });
    } catch (error) {
      console.log("error in fontend place order", error.message);
    }
  },
  getAllOrders: async () => {
    set({ loading: true });
    try {
      const response = await axios.get("/admin/orders");
      set({ orders: response.data.orders, loading: false });
    } catch (error) {
      set({ loading: false });
      console.log("error fetching orders", error.message);
    }
  },
  getOrderById: async(orderId) => {
    set({loading: true});
    try {
      const response = await axios.get(`/admin/orders/${orderId}`);
      set({order: response.data, loading: false});
    } catch (error) {
      set({loading: false});
      console.log("error fetching order: ", error.message);
    }
  },
  updateOrder: async(orderId, orderData)=>{
    set({loading: true});
    try {
      const response = await axios.post(`/admin/orders/${orderId}`, orderData);
      const newOrder = response.data.order;
      set((state)=>({
        order: newOrder,
        loading: false,
      }));
      toast.success("Saved changes")
    } catch (error) {
      set({loading: false});
      console.log("error updating order: ", error.message)
    }
  },
  deleteOrder: async(orderId)=>{
    set({loading: true});
    try {
      const response = await axios.delete(`/admin/orders/${orderId}`);
      set((prevOrders)=>({
        orders: prevOrders.orders.filter((order)=>order._id !== orderId),
        loading: false,
      }));
      toast.success("Order deleted!");
    } catch (error) {
      set({loading: false});
      console.log("error deleting Product", error.message)
    }
  },
}));
