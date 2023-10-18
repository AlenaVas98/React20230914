import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectReviewById } from "../selectors";

export const getReviews = createAsyncThunk(
  "reviews/getRviews",
  async () => {
    const response = fetch(
      "http://localhost:3001/api/reviews?restaurantId=:restaurantId"
    );
    return (await response).json();
  },
  {
    condition: (_, { getState }) => {
      selectReviewById(getState())?.length;
    },
  }
);
