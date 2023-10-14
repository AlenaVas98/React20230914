import { createSlice } from "@reduxjs/toolkit";
import { normalizedDishes } from "../../../constans/mock-normalized";

const initialState = {
  entities: normalizedDishes.reduce((acc, dishes) => {
    acc[dishes.id] = dishes;
    return acc;
  }, {}),
  ids: normalizedDishes.map(({ id }) => id),
};

const { reducer } = createSlice({
  name: "dish",
  initialState,
});

export default reducer;
