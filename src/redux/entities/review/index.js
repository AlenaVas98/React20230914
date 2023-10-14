import { createSlice } from "@reduxjs/toolkit";
import { normalizedReviews } from "../../../constans/mock-normalized";

const initialState = {
  entities: normalizedReviews.reduce((acc, reviews) => {
    acc[reviews.id] = reviews;
    return acc;
  }, {}),
  ids: normalizedReviews.map(({ id }) => id),
};

const { reducer } = createSlice({
  name: "review",
  initialState,
});

export default reducer;
