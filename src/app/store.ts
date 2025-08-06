import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import userReducer from "../features/user/userSlice";
import ticketReducer from "../features/ticket/ticketSlice";
import contactUsReducer from "../features/contactUs/contactUsSlice";
import masterReducer from "../features/master/masterSlice";
import profileReducer from "../features/profile/profileSlice";
import resourceReducer from "../features/resource/resourcesSlice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    ticket: ticketReducer,
    contactUs: contactUsReducer,
    master: masterReducer,
    profile: profileReducer,
    resource: resourceReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
