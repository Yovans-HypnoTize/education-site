import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../lib/axios";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { clearUser } from "../user/userSlice";
import { removeToken } from "../../utils/Utils";

interface AuthState {
  loading: boolean;
  error: string | null;
  backdrop: boolean;
}

const initialState: AuthState = {
  loading: false,
  error: null,
  backdrop: false,
};

export const loginUser = createAsyncThunk(
  "auth/login",
  async (credentials: { email: string; password: string }, thunkAPI) => {
    try {
      const response = await axiosInstance.post("auth/login", credentials);

      const accessToken = response.data.accessToken;
      const refreshToken = response.data.refreshToken;
      if (accessToken && refreshToken) {
        // localStorage.setItem("access_token", accessToken)
        Cookies.set("access_token", accessToken);
        Cookies.set("refresh_token", refreshToken);
      }

      return response.data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || "Login failed"
      );
    }
  }
);

export const registerUser = createAsyncThunk(
  "auth/register",
  async (
    userData: { email: string; password: string; name: string },
    thunkAPI
  ) => {
    try {
      const response = await axiosInstance.post("/user/register", userData);

      const accessToken = response.data.accessTokens;
      const refreshToken = response.data.refreshToken;
      if (accessToken) {
        Cookies.set("access_token", accessToken);
        Cookies.set("refresh_token", refreshToken);
        //  localStorage.setItem("access_token", accessToken)
      }

      return response.data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || "Registration failed"
      );
    }
  }
);

export const forgotPassword = createAsyncThunk(
  "auth/forgotPassword",
  async (values: { email: string }, thunkAPI) => {
    try {
      const response = await axiosInstance.post(
        "/user/forgot-password",
        values
      );
      return response.data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || "Something went wrong"
      );
    }
  }
);

export const resetPassword = createAsyncThunk(
  "auth/resetPassword",
  async (
    values: {
      newPassword: string;
      confirmPassword: string;
      token: string | null;
    },
    thunkAPI
  ) => {
    try {
      const response = await axiosInstance.post("/user/reset-password", values);
      return response.data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || "Something went wrong"
      );
    }
  }
);

export const logoutUser = createAsyncThunk(
  "auth/logout",
  async (_, thunkAPI) => {
    try {
      const response = await axiosInstance.post("/auth/logout");
      removeToken();
      thunkAPI.dispatch(clearUser());
      return response.data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || "Logout failed"
      );
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    showBackdrop: (state) => {
      state.backdrop = true;
    },
    reduceBackdrop: (state) => {
      state.backdrop = false;
    },
  },
  extraReducers: (builder) => {
    builder
      //login
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;

        const message = action.payload.message || "Login successful";
        toast.success(message);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      .addCase(forgotPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(forgotPassword.fulfilled, (state, action) => {
        state.loading = false;

        const message = action.payload.message || "OTP Sent Successfully";
        toast.success(message);
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      .addCase(resetPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.loading = false;

        const message = action.payload.message || "Password reset successful";
        toast.success(message);
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;

        const message = action.payload.message || "Registration successful";
        toast.success(message);
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      .addCase(logoutUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logoutUser.fulfilled, (state, action) => {
        state.loading = false;
        const message = action.payload.message || "Logout successful";
        toast.success(message);
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        toast.error(action.payload as string);
      });
  },
});

export default authSlice.reducer;
export const { showBackdrop, reduceBackdrop } = authSlice.actions;
