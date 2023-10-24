import { configureStore } from "@reduxjs/toolkit";
import restaurant from "./entities/restaurant";
import review from "./entities/review";
import user from "./entities/user";
import dish from "./entities/dish";
import { loggerMiddleware } from "./middlewares/logger";
import request from "./ui/request";
import cart from "./ui/cart/index";

const store = configureStore({
  reducer: {
    restaurant,
    dish,
    user,
    review,
    request,
    cart,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    loggerMiddleware,
  ],
});

export default store;
