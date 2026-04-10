import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:5000/api",
    withCredentials: true,
})

const refreshClient = axios.create({
    baseURL: "http://localhost:5000/api",
    withCredentials: true,
})

let refreshPromise = null;

axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;
        const status = error?.response?.status;

        if (!status || status !== 401 || !originalRequest) {
            return Promise.reject(error);
        }

        if (
            originalRequest._retry ||
            originalRequest.url?.includes("/auth/refreshAccessToken")
        ) {
            return Promise.reject(error);
        }

        originalRequest._retry = true;

        try {
            if (!refreshPromise) {
                refreshPromise = refreshClient
                    .post("/auth/refreshAccessToken")
                    .finally(() => {
                        refreshPromise = null;
                    });
            }

            await refreshPromise;
            return axiosInstance(originalRequest);
        } catch (refreshError) {
            return Promise.reject(refreshError);
        }
    }
);


export default axiosInstance