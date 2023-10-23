import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getRestaurants } from "./thunks/get-restaurants";

const entityAdapter = createEntityAdapter();

const { reducer, actions } = createSlice({
  name: "restaurant",
  initialState: entityAdapter.getInitialState(),
  extraReducers: (builder) =>
    builder.addCase(getRestaurants.fulfilled, (state, { payload } = {}) => {
      entityAdapter.setAll(state, payload);
    }),
});

export default reducer;
export { actions as restaurantActions };
