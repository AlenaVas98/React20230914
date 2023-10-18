import { configureStore } from "@reduxjs/toolkit";
import restaurant from "./entities/restaurant";
import review from "./entities/review";
import user from "./entities/user";
import dish from "./entities/dish";
import { loggerMiddleware } from "./middlewares/logger";

const store = configureStore({
  reducer: {
    restaurant,
    dish,
    user,
    review,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    loggerMiddleware,
  ],
});

export default store;
