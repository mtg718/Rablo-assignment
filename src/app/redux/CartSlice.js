import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
 
    add: (state, action) => {
      const { id, title, price, qty, image } = action.payload;
      const existingItem = state.find((item) => item.id === id);
      if (existingItem) {
        existingItem.qty += 1;
      } else {
        let qty = 1;
        state.push({ id, title, price, qty, image });
      }
    },
    remove: (state, action) => {
      const cartId = action.payload;
      return state.filter((item) => item.id !== cartId);
      
    },
    incrementQty: (state, action) => {
      const cartId = action.payload;
      const existingItem = state.find((item) => item.id === cartId);
      if (existingItem) {
        existingItem.qty += 1;
      }
    },
    decrementQty: (state, action) => {
      const cartId = action.payload;
      const existingItem = state.find((item) => item.id === cartId);
      if (existingItem && existingItem.qty > 1) {
        existingItem.qty -= 1;
      } else if (existingItem.qty == 1) {
        state = state.filter((item) => item.id !== cartId);
      }
      return state;
    },
  },
});

export const { add, remove, incrementQty, decrementQty } = CartSlice.actions;
export default CartSlice.reducer;
