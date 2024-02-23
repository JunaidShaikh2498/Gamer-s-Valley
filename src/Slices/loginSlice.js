import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    loggedIn: false,
    role:-1
  };
export const loggedSlice = createSlice({
  name: "logged",
  initialState,
  reducers: {
    login(state) {
      state.loggedIn = true;
      localStorage.setItem("loginStat",JSON.stringify(state.loggedIn))
      
    },
    logout(state) {
      localStorage.removeItem("loginStat")
      state.loggedIn = false;
      localStorage.setItem("loginStat",JSON.stringify(state.loggedIn))
      localStorage.clear()
    },
  },
});
export const { login } = loggedSlice.actions;
export const { logout } = loggedSlice.actions;
export const { loginCustomer } = loggedSlice.actions;
export const { loginExpert } = loggedSlice.actions;

export default loggedSlice.reducer;
