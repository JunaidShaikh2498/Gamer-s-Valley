// authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedIn: false,
  role: -1,
  customerId: null, // Add customerId to your initial state
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.loggedIn = true;
      state.customerId = action.payload.customerId; // Set the customerId when logging in
    },
    logout(state) {
      state.loggedIn = false;
      state.customerId = null; // Clear the customerId when logging out
    },
    // ... other actions
  },
});

export const { login, logout } = authSlice.actions;

export const selectUser = (state) => state.auth;

export default authSlice.reducer;
