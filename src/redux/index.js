import { configureStore } from "@reduxjs/toolkit";
import restaurant from "./entities/restaurant";
import review from "./entities/review";
import user from "./entities/user";
import dish from "./entities/dish";

const store = configureStore({
  reducer: {
    restaurant,
    dish,
    user,
    review,
  },
});

export default store;
