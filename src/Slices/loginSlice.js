import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedIn: false,
  role: -1,
};

export const loggedSlice = createSlice({
  name: "logged",
  initialState,
  reducers: {
    login(state) {
      state.loggedIn = true;
    },
    logout(state) {
      state.loggedIn = false;
    },
    loginCustomer(state) {
      state.loggedIn = true;
      state.role = 2; 
    },
    loginExpert(state) {
      state.loggedIn = true;
      state.role = 3; 
    },
  },
});

export const { login, logout, loginCustomer, loginExpert } = loggedSlice.actions;

export default loggedSlice.reducer;
