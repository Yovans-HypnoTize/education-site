import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../lib/axios";
import { toast } from "react-toastify";

interface TicketState {
  tickets: any;
  loading: boolean;
  error: string | null;
  creating: boolean;
  createError: string | null;
}

const initialState: TicketState = {
  tickets: null,
  loading: false,
  error: null,
  creating: false,
  createError: null,
};

// GET tickets for particular user with pagination
export const getTickets = createAsyncThunk(
  "ticket/getTickets",
  async ({ page, size }: { page: number; size: number }, thunkAPI) => {
    try {
      const response = await axiosInstance.get("/support-ticket", {
        params: { page, size },
      });
      return response.data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || "Failed to fetch tickets"
      );
    }
  }
);

// POST ticket
export const createTicket = createAsyncThunk(
  "ticket/createTicket",
  async (
    formValues: {
      issue: string;
      describeIssue: string;
      screenshotOfIssue: File[];
    },
    thunkAPI
  ) => {
    try {
      const formData = new FormData();
      formData.append("name", formValues.issue);
      formData.append("description", formValues.describeIssue);

      if (formValues.screenshotOfIssue?.length > 0) {
        formValues.screenshotOfIssue.forEach((file) => {
          formData.append("files", file);
        });
      }

      const response = await axiosInstance.post("/support-ticket", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return response.data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || "Failed to create ticket"
      );
    }
  }
);

const ticketSlice = createSlice({
  name: "ticket",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Get Tickets
    builder
      .addCase(getTickets.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getTickets.fulfilled, (state, action) => {
        state.loading = false;
        state.tickets = action.payload;
      })
      .addCase(getTickets.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });

    // Create Ticket
    builder
      .addCase(createTicket.pending, (state) => {
        state.creating = true;
        state.createError = null;
      })
      .addCase(createTicket.fulfilled, (state, action) => {
        state.creating = false;
        const message = action.payload.message || "Ticket Created Successfully";
        toast.success(message);
      })
      .addCase(createTicket.rejected, (state, action) => {
        state.creating = false;
        state.createError = action.payload as string;
      });
  },
});

export default ticketSlice.reducer;
