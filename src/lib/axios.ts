import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

let isRefreshing = false;
let failedQueue: any[] = [];

const processQueue = (error: any, token: string | null = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });

  failedQueue = [];
  // failedQueue.length = 0;
};


axiosInstance.interceptors.request.use(
  (config) => {
    const token = Cookies.get("access_token");
      // const token = localStorage.getItem("access_token")
    if (token) {
      config.headers["Authorization"] = token;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {

    const originalRequest = error.config;

     // Token expired & not already trying to refresh
    if (error.response?.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise(function (resolve, reject) {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            originalRequest.headers["Authorization"] = token;
            return axiosInstance(originalRequest);
          })
          .catch((err) => Promise.reject(err));
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const response = await axios.post(
          import.meta.env.VITE_API_BASE_URL +
          "/auth/refreshToken",
          {
            refreshToken: Cookies.get("refresh_token"),
          },
          {
            headers: {
              Authorization: `${Cookies.get("refresh_token")}`,
            },
          }
        );

        const newAccessToken = response.data.accessToken;
        Cookies.set("access_token", newAccessToken);

        processQueue(null, newAccessToken);

        axiosInstance.defaults.headers.common["Authorization"] = `${newAccessToken}`;
        originalRequest.headers["Authorization"] = newAccessToken;
        processQueue(null, newAccessToken);
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        processQueue(refreshError, null);
        // Redirect to login or clear session
        Cookies.remove("access_token");
        Cookies.remove("refresh_token");
        toast.error("Session expired. Please log in again.");
        window.location.href = "/";
        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }



      const message =
        error.response?.data?.message ||
        "Something went wrong. Please try again.";
      toast.error(message);
      return Promise.reject(error);
   

  }
);

export default axiosInstance;
