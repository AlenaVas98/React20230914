import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectDishIds } from "../selectors";

export const getDishes = createAsyncThunk(
  "dishes/getDishes",
  async (restaurantId) => {
    const response = fetch(
      `http://localhost:3001/api/dishes?restaurantId=${restaurantId}`
    );
    return (await response).json();
  },
  {
    condition: (_, { getState }) => {
      selectDishIds(getState())?.length;
    },
  }
);
