import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectDishIds } from "../selectors";
import { selectRestaurantMenuById } from "../../restaurant/selectors";

export const getDishes = createAsyncThunk(
  "dishes/getDishes",
  async (restaurantId) => {
    const response = fetch(
      `http://localhost:3001/api/dishes?restaurantId=${restaurantId}`
    );
    return (await response).json();
  },
  {
    condition: (restaurantId, { getState }) => {
      const state = getState();
      const restaurantDish = selectRestaurantMenuById(state, restaurantId);
      const dishIds = selectDishIds(state);

      return (
        restaurantDish &&
        restaurantDish.some((dishId) => !dishIds.includes(dishId))
      );
    },
  }
);
