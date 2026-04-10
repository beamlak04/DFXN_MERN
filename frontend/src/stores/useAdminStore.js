import { create } from "zustand";
import axios from "../lib/axios";
import toast from "react-hot-toast";

export const useAdminStore = create((set) => ({
    dashboardLoading: false,
    analyticsLoading: false,
    settingsLoading: false,
    dashboardData: {
        summary: {
            totalProducts: 0,
            totalOrders: 0,
            ordersToday: 0,
            totalRevenue: 0,
            totalCustomers: 0,
        },
        topSelling: [],
        recentOrders: [],
    },
    analyticsData: {
        rangeDays: 30,
        salesTrend: [],
        orderStatus: [],
        paymentMethods: [],
        categoryPerformance: [],
    },
    settingsProfile: {
        name: "",
        email: "",
        role: "",
    },

    fetchDashboard: async () => {
        set({ dashboardLoading: true });
        try {
            const response = await axios.get("/admin/dashboard");
            set({ dashboardData: response.data, dashboardLoading: false });
        } catch (error) {
            set({ dashboardLoading: false });
            toast.error(error.response?.data?.message || "Failed to load dashboard");
        }
    },

    fetchAnalytics: async (days = 30) => {
        set({ analyticsLoading: true });
        try {
            const response = await axios.get(`/admin/analytics?days=${days}`);
            set({ analyticsData: response.data, analyticsLoading: false });
        } catch (error) {
            set({ analyticsLoading: false });
            toast.error(error.response?.data?.message || "Failed to load analytics");
        }
    },

    fetchSettings: async () => {
        set({ settingsLoading: true });
        try {
            const response = await axios.get("/admin/settings");
            set({ settingsProfile: response.data.profile, settingsLoading: false });
        } catch (error) {
            set({ settingsLoading: false });
            toast.error(error.response?.data?.message || "Failed to load settings");
        }
    },

    updateProfile: async (profileData) => {
        set({ settingsLoading: true });
        try {
            const response = await axios.put("/admin/settings/profile", profileData);
            set({ settingsProfile: response.data.profile, settingsLoading: false });
            toast.success(response.data.message || "Profile updated");
            return response.data;
        } catch (error) {
            set({ settingsLoading: false });
            toast.error(error.response?.data?.message || "Failed to update profile");
            throw error;
        }
    },

    updatePassword: async (passwordData) => {
        set({ settingsLoading: true });
        try {
            const response = await axios.put("/admin/settings/password", passwordData);
            set({ settingsLoading: false });
            toast.success(response.data.message || "Password updated");
            return response.data;
        } catch (error) {
            set({ settingsLoading: false });
            toast.error(error.response?.data?.message || "Failed to update password");
            throw error;
        }
    },
}));