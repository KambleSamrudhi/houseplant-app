import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalItems: 0,
    totalCost: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const plant = action.payload;
      const existingItem = state.items.find(item => item.id === plant.id);

      if (!existingItem) {
        state.items.push({ ...plant, quantity: 1 });
        state.totalItems += 1;
        state.totalCost += plant.price;
      }
    },
    increment: (state, action) => {
      const plantId = action.payload;
      const item = state.items.find(item => item.id === plantId);

      if (item) {
        item.quantity += 1;
        state.totalItems += 1;
        state.totalCost += item.price;
      }
    },
    decrement: (state, action) => {
      const plantId = action.payload;
      const item = state.items.find(item => item.id === plantId);

      if (item) {
        item.quantity -= 1;
        state.totalItems -= 1;
        state.totalCost -= item.price;

        if (item.quantity === 0) {
          state.items = state.items.filter(item => item.id !== plantId);
        }
      }
    },
    removeItem: (state, action) => {
      const plantId = action.payload;
      const item = state.items.find(item => item.id === plantId);

      if (item) {
        state.totalItems -= item.quantity;
        state.totalCost -= item.price * item.quantity;
        state.items = state.items.filter(item => item.id !== plantId);
      }
    },
  },
});

export const { addToCart, increment, decrement, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
