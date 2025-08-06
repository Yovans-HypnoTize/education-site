import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../lib/axios";

interface ResourcesState {
  loading: boolean;
  error: string | null;
  backdrop: boolean;
  registerLaunchEdumaatResponse: any;
}

const initialState: ResourcesState = {
  loading: false,
  error: null,
  backdrop: false,
  registerLaunchEdumaatResponse: null,
};

export const registerLaunchEdumaat = createAsyncThunk(
  "resource/registerLaunchEdumaat",
  async (
    data,
    thunkAPI
  ) => {
    try {
      const response = await axiosInstance.post("/register", data);
      return response.data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || "Registration failed"
      );
    }
  }
);

const resourcesSlice = createSlice({
  name: "resource",
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
      .addCase(registerLaunchEdumaat.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerLaunchEdumaat.fulfilled, (state, action) => {
        state.loading = false;
        state.registerLaunchEdumaatResponse = action.payload;
      })
      .addCase(registerLaunchEdumaat.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default resourcesSlice.reducer;
