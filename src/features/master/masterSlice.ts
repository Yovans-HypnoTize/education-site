import {
  createSlice,
  createAsyncThunk,
  isPending,
  isRejected,
} from "@reduxjs/toolkit";
import axiosInstance from "../../lib/axios";

interface masterState {
  countries: any;
  loading: boolean;
  error: string | null;
}

const initialState: masterState = {
  countries: null,
  loading: false,
  error: null,
};

// Fetch Countries List
export const getCountriesList = createAsyncThunk(
  "master/getCountriesList",
  async (_, thunkAPI) => {
    try {
      const response = await axiosInstance.get("/country/list");

      return response.data.data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || "Failed to fetch user"
      );
    }
  }
);

const masterSlice = createSlice({
  name: "master",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCountriesList.fulfilled, (state, action) => {
        state.loading = false;
        state.countries = action.payload;
      })

      .addMatcher(isPending(getCountriesList), (state) => {
        state.loading = true;
        state.error = null;
      })
      .addMatcher(isRejected(getCountriesList), (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default masterSlice.reducer;
