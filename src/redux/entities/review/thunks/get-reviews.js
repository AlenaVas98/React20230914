import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectReviewIds } from "../selectors";
import { selectRestaurantReviewById } from "../../restaurant/selectors";

export const getReviews = createAsyncThunk(
  "reviews/getRviews",
  async (restaurantId) => {
    const response = fetch(
      `http://localhost:3001/api/reviews?restaurantId=${restaurantId}`
    );
    return (await response).json();
  },
  {
    condition: (restaurantId, { getState }) => {
      const state = getState();
      const restaurantReviews = selectRestaurantReviewById(state, restaurantId);
      const reviewIds = selectReviewIds(state);

      return (
        restaurantReviews &&
        restaurantReviews.some((reviewId) => !reviewIds.includes(reviewId))
      );
    },
  }
);
