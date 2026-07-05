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

const readCookie = (name) => {
    if (typeof document === "undefined") return null;
    const match = document.cookie.match(new RegExp('(^|; )' + name + '=([^;]*)'));
    return match ? decodeURIComponent(match[2]) : null;
};

// Attach CSRF token for mutating requests using double-submit cookie pattern.
axiosInstance.interceptors.request.use((config) => {
    try {
        const method = (config.method || "get").toLowerCase();
        if (["get", "head", "options"].includes(method)) return config;
        const csrf = readCookie("csrfToken");
        if (csrf) {
            config.headers = config.headers || {};
            config.headers["x-csrf-token"] = csrf;
        }
    } catch (e) {
        // ignore
    }
    return config;
});

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