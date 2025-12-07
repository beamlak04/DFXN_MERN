import toast from "react-hot-toast";
import { create } from "zustand";
import axios from "../lib/axios";

export const useUserStore = create((set, get) => ({
  user: null,
  loading: false,
  checkingAuth: true,

  signup: async ({ name, email, password, confirmPassword }) => {
    set({ loading: true });

    if (password !== confirmPassword) {
      set({ loading: false });
      return toast.error("passwords do not match");
    }

    try {
      const res = await axios.post("/auth/signup", { name, email, password });
      set({ user: res.data, loading: false });
      window.location.reload();
    } catch (error) {
      set({ loading: false });
      toast.error(error.response.data.message || "error try again later");
    }
  },
  login: async (email, password) => {
    set({ loading: true });

    try {
      const res = await axios.post("/auth/login", { email, password });
      set({ user: res.data, loading: false });
      window.location.href = "/";
    } catch (error) {
      set({ loading: false });
      toast.error(error.response.data.message || "error try again later");
    }
  },
  logout: async () => {
    try {
      await axios.post("auth/logout");
      set({ user: null });
      window.location.href = "/";
    } catch (error) {
      toast.error(
        error.response?.data?.message || "An error occured logging out"
      );
    }
  },
  checkAuth: async () => {
    set({ checkingAuth: true });
    try {
      const response = await axios.get("/auth/profile");
      set({ user: response.data, checkingAuth: false });
    } catch (error) {
      set({ checkingAuth: false, user: null });
    }
  },
  refreshToken: async () => {
    set({ checkingAuth: true });
    try {
      const response = await axios.post("/auth/refreshAccessToken");
      set({ checkingAuth: false });
      return response.data;
    } catch (error) {
      set({ user: null, checkingAuth: false });
      console.log(error.message);
      throw error;
    }
  },
}));

// let refreshPromise = null;
// axios.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config;
//     console.log('k')
//     console.log("first")
//     if (error.response?.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;
//       if (!refreshPromise) {
//         refreshPromise = useUserStore.getState().refreshToken();
//       }
//       try {
//         await refreshPromise;
//         refreshPromise = null;
//         return axios({...originalRequest, withCredentials: true});
//       } catch (refreshError) {
//         useUserStore.getState().logout();
//         return Promise.reject(error);
//       }
//     }
//     return Promise.reject(error);
//   }
// );