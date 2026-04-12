import { create } from "zustand";
import axios from "../lib/axios";
import toast from "react-hot-toast";

export const useAdminStore = create((set) => ({
    dashboardLoading: false,
    analyticsLoading: false,
    settingsLoading: false,
    contactMessagesLoading: false,
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
    settingsContactNotifications: {
        emailNotificationsEnabled: true,
        contactNotifyTo: "",
    },
    contactMessages: [],
    contactMessagesPagination: {
        page: 1,
        limit: 20,
        total: 0,
        totalPages: 1,
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
            set({
                settingsProfile: response.data.profile,
                settingsContactNotifications: response.data.contactNotifications || {
                    emailNotificationsEnabled: true,
                    contactNotifyTo: "",
                },
                settingsLoading: false,
            });
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

    updateContactNotificationSettings: async (payload) => {
        set({ settingsLoading: true });
        try {
            const response = await axios.put("/admin/settings/contact-notifications", payload);
            set({
                settingsContactNotifications: response.data.contactNotifications,
                settingsLoading: false,
            });
            toast.success(response.data.message || "Notification settings updated");
            return response.data;
        } catch (error) {
            set({ settingsLoading: false });
            toast.error(error.response?.data?.message || "Failed to update notification settings");
            throw error;
        }
    },

    fetchContactMessages: async (params = {}) => {
        set({ contactMessagesLoading: true });
        try {
            const query = new URLSearchParams();
            if (params.page) query.set("page", params.page);
            if (params.limit) query.set("limit", params.limit);
            if (params.status && params.status !== "all") query.set("status", params.status);
            if (params.search) query.set("search", params.search);

            const suffix = query.toString() ? `?${query.toString()}` : "";
            const response = await axios.get(`/admin/contact-messages${suffix}`);
            set({
                contactMessages: response.data.messages || [],
                contactMessagesPagination: response.data.pagination || {
                    page: 1,
                    limit: 20,
                    total: 0,
                    totalPages: 1,
                },
                contactMessagesLoading: false,
            });
        } catch (error) {
            set({ contactMessagesLoading: false });
            toast.error(error.response?.data?.message || "Failed to load contact messages");
        }
    },

    updateContactMessageStatus: async (messageId, status) => {
        try {
            const response = await axios.patch(`/admin/contact-messages/${messageId}/status`, { status });
            set((state) => ({
                contactMessages: state.contactMessages.map((message) =>
                    message._id === messageId
                        ? { ...message, status }
                        : message
                ),
            }));
            toast.success(response.data?.message || "Status updated");
            return true;
        } catch (error) {
            toast.error(error.response?.data?.message || "Failed to update message status");
            return false;
        }
    },
}));