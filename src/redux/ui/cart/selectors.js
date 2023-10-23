const selectCartModule = (state) => state.cart;

export const selectDishAmountById = (state, dishId) =>
  selectCartModule(state)[dishId] || 0;

export const selectCart = (state) => selectCartModule(state).items;
