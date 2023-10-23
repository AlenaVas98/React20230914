import { createSlice } from "@reduxjs/toolkit";
const { reducer, actions } = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    increment: (state, { payload }) => {
      state[payload] = (state[payload] || 0) + 1;
    },
    decrement: (state, { payload }) => {
      state[payload] = (state[payload] || 0) > 0 ? state[payload] - 1 : 0;
    },
    addItemCart: (state, action) => {
      const newDish = action.payload;
      const incrementDish = state.items.find((item) => item.id === newDish.id);
      if (!incrementDish) {
        state.items.push({
          id: newDish.id,
          name: newDish.name,
          quantity: 1,
        });
      } else {
        incrementDish.quantity++;
      }
    },
    removeItemCart: (state, action) => {
      const id = action.payload;
      const incrementDish = state.items.find((item) => item.id === id);
      if (incrementDish.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        incrementDish.quantity--;
      }
    },
  },
});

export default reducer;

export { actions as cartActions };
