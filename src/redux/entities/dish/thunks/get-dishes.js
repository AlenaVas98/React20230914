import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectDishById } from "../selectors";

export const getDishes = createAsyncThunk(
  "dishes/getDishes",
  async () => {
    const response = fetch(
      "http://localhost:3001/api/dishes?restaurantId=:restaurantId"
    );

    return (await response).json();
  },
  {
    condition: (_, { getState }) => {
      selectDishById(getState())?.length;
    },
  }
);
