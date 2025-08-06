import Cookies from "js-cookie";
import { toast } from "react-toastify";

export const removeToken = () => {
  Cookies.remove("access_token", { path: "/" });
  // localStorage.removeItem("access_token")
};

export const getToken = () => Cookies.get("access_token") ?? null;
// export const getToken = () => localStorage.getItem("access_token") ?? null;

export const notifySuccess = (msg: string) => toast.success(msg);

export const notifyError = (msg: string) => toast.error(msg);