import { create } from "zustand";
import toast from "react-hot-toast";
import axios from "../lib/axios";

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
      toast.success(response.data.message);
      set({ loading: false });
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to place order");
      set({ loading: false });
    }
  },
  getAllOrders: async () => {
    set({ loading: true });
    try {
      const response = await axios.get("/admin/orders");
      set({ orders: response.data.orders, loading: false });
    } catch (error) {
      set({ loading: false });
      toast.error(error.response?.data?.message || "Failed to fetch orders");
    }
  },
  getOrderById: async (orderId) => {
    set({ loading: true });
    try {
      const response = await axios.get(`/admin/orders/${orderId}`);
      set({ order: response.data, loading: false });
    } catch (error) {
      set({ loading: false });
      toast.error(error.response?.data?.message || "Failed to fetch order");
    }
  },
  updateOrder: async (orderId, orderData) => {
    set({ loading: true });
    try {
      const response = await axios.put(`/admin/orders/${orderId}`, orderData);
      const newOrder = response.data.order;
      set(() => ({
        order: newOrder,
        loading: false,
      }));
      toast.success("Order updated successfully");
    } catch (error) {
      set({ loading: false });
      toast.error(error.response?.data?.message || "Failed to update order");
    }
  },
  deleteOrder: async (orderId) => {
    set({ loading: true });
    try {
      await axios.delete(`/admin/orders/${orderId}`);
      set((prevOrders) => ({
        orders: prevOrders.orders.filter((order) => order._id !== orderId),
        loading: false,
      }));
      toast.success("Order deleted successfully");
    } catch (error) {
      set({ loading: false });
      toast.error(error.response?.data?.message || "Failed to delete order");
    }
  },
}));
