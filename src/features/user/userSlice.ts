import {
  createSlice,
  createAsyncThunk,
  isPending,
  isRejected,
} from "@reduxjs/toolkit";
import axiosInstance from "../../lib/axios";

interface UserState {
  user: any;
  userByID: any;
  updateUserResponse: any;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  user: null,
  userByID: null,
  updateUserResponse: null,
  loading: false,
  error: null,
};

// Fetch User Data
export const getUser = createAsyncThunk("user/getUser", async (_, thunkAPI) => {
  try {
    const response = await axiosInstance.get("/user");

    return response.data.data;
  } catch (err: any) {
    return thunkAPI.rejectWithValue(
      err.response?.data?.message || "Failed to fetch user"
    );
  }
});

export const getUserById = createAsyncThunk(
  "user/getUserById",
  async (id, thunkAPI) => {
    try {
      const response = await axiosInstance.get(`/user/${id}`);

      return response.data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || "Failed to fetch user"
      );
    }
  }
);

export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (values: any, thunkAPI) => {
    try {
      const response = await axiosInstance.put(`/user`, values, {
        headers: {
          "Content-Type": "multipart/form-data",
        }
      });
      return response;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(
        err?.response?.data?.message || "Failed to update user"
      );
    }
  }
);

// export const updateProfileImage = createAsyncThunk(
//   "user/updateProfileImage",
//   async (formData, thunkAPI) => {
//     try {
//       const response = await axiosInstance.put(`/user/profile`, formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       });
//       return response.data;
//     } catch (err: any) {
//       return thunkAPI.rejectWithValue(
//         err?.response?.data?.message || "Failed to update user"
//       );
//     }
//   }
// );

export const changePassword = createAsyncThunk(
  "user/changePassword",
  async (
    values: { newPassword: string; confirmPassword: string },
    thunkAPI
  ) => {
    try {
      const response = await axiosInstance.post(`/user/change-password`, values);
      return response;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(
        err?.response?.data?.message || "Failed to update user"
      );
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })

      .addCase(getUserById.fulfilled, (state, action) => {
        state.loading = false;
        state.userByID = action.payload;
      })

      .addCase(updateUser.fulfilled, (state, action) => {
        state.loading = false;
        state.updateUserResponse = action.payload;
      })

      .addCase(changePassword.fulfilled, (state, action) => {
        state.loading = false;
        state.updateUserResponse = action.payload;
      })

      .addMatcher(
        isPending(getUser, getUserById, updateUser, changePassword),
        (state) => {
          state.loading = true;
          state.error = null;
        }
      )

      .addMatcher(
        isRejected(getUser, getUserById, updateUser, changePassword),
        (state, action) => {
          state.loading = false;
          state.error = action.payload as string;
        }
      );
  },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
