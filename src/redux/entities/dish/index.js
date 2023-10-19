import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getDishes } from "./thunks/get-dishes";
import { REQUEST_STATUS } from "../../../constans/statuses";

const entityAdapter = createEntityAdapter();
const { reducer } = createSlice({
  name: "dish",
  initialState: entityAdapter.getInitialState({ status: REQUEST_STATUS.idle }),
  extraReducers: (builder) =>
    builder
      .addCase(getDishes.pending, (state) => {
        state.status = REQUEST_STATUS.pending;
      })
      .addCase(getDishes.fulfilled, (state, { payload }) => {
        entityAdapter.setAll(state, payload);
        state.status = REQUEST_STATUS.fulfilled;
      })
      .addCase(getDishes.rejected, (state) => {
        state.status = REQUEST_STATUS.rejected;
      }),
});

export default reducer;
