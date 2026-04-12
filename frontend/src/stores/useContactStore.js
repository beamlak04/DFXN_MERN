import { create } from "zustand";
import toast from "react-hot-toast";
import axios from "../lib/axios";

export const useContactStore = create((set) => ({
  submitting: false,
  submitContactMessage: async (payload) => {
    set({ submitting: true });
    try {
      const response = await axios.post("/contact/submit", payload);
      toast.success(response.data?.message || "Message sent successfully");
      set({ submitting: false });
      return true;
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to send message");
      set({ submitting: false });
      return false;
    }
  },
}));