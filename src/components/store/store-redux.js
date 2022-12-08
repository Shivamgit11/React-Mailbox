import { configureStore } from "@reduxjs/toolkit";


import authslice from "./Auth-redux";

const store = configureStore({
    auth: authslice.reducer,
})

export default store;