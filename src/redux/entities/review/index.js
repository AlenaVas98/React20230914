import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getReviews } from "./thunks/get-reviews";
import { createReview } from "./thunks/create-review";

const entityAdapter = createEntityAdapter();
const { reducer } = createSlice({
  name: "review",
  initialState: entityAdapter.getInitialState(),

  extraReducers: (builder) =>
    builder
      .addCase(createReview.fulfilled, (state, { payload } = {}) => {
        entityAdapter.addOne(state, payload);
      })
      .addCase(getReviews.fulfilled, (state, { payload } = {}) => {
        entityAdapter.setMany(state, payload);
      }),
});

export default reducer;
