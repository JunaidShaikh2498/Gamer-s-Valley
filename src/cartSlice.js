// cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItemIndex = state.findIndex((item) => item.id === action.payload.id);

      if (existingItemIndex !== -1) {
        // If the product is in the cart, remove it
        state.splice(existingItemIndex, 1);
      } else {
        // If the product is not in the cart, add it
        state.push(action.payload);
      }
    },
    clearCart: (state) => {
      state = [];
    },
  },
});

export const { addToCart, clearCart } = cartSlice.actions;
export const selectCart = (state) => state.cart;

export default cartSlice.reducer;
