import { configureStore } from "@reduxjs/toolkit";
import authslice from "./auth-redux";
import emailSlice from "./email-redux";

const store = configureStore({
  reducer: {
    auth: authslice.reducer,
    email: emailSlice.reducer,
  },
});

export default store;
