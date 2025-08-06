import {
  createSlice,
  createAsyncThunk,
  isPending,
  isRejected,
} from "@reduxjs/toolkit";
import axiosInstance from "../../lib/axios";

interface contactUsState {
  postEnquiryResponse: any;
  loading: boolean;
  error: string | null;
}

const initialState: contactUsState = {
  postEnquiryResponse: null,
  loading: false,
  error: null,
};

interface EnquiryFormValues {
  firstName: string;
  lastName: string;
  email: string;
  phoneNo: string;
  website: string;
  organisationName: string;
  countryId: string;
  zipcode: string;
  enquiry: string;
  message: string;
}

export const postEnquiry = createAsyncThunk<any, EnquiryFormValues>(
  "profile/postEnquiry",
  async (formValues, thunkAPI) => {
    try {
      const response = await axiosInstance.post("/enquiry", formValues);
      return response.data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || "Failed to create ticket"
      );
    }
  }
);

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    clearPostEnquiryResponse: (state) => {
      state.postEnquiryResponse = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postEnquiry.fulfilled, (state, action) => {
        state.loading = false;
        state.postEnquiryResponse = action.payload;
      })

      .addMatcher(isPending(postEnquiry), (state) => {
        state.loading = true;
        state.error = null;
      })
      .addMatcher(isRejected(postEnquiry), (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearPostEnquiryResponse } = profileSlice.actions;

export default profileSlice.reducer;
