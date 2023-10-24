import { REQUEST_STATUS } from "../../../constans/statuses";

const selectRestaurantModule = (state) => state.restaurant;

export const selectRestaurantById = (state, id) =>
  selectRestaurantModule(state).entities[id];

export const selectRestaurantIds = (state) => selectRestaurantModule(state).ids;

export const selectRestaurantLoadingStatus = (state) =>
  selectRestaurantModule(state).status;

export const selectRestaurantMenuById = (state, id) =>
  selectRestaurantById(state, id).menu;

export const selectRestaurantReviewById = (state, id) =>
  selectRestaurantById(state, id).review;

export const selectRestaurantLoading = (state) => {
  selectRestaurantLoadingStatus(state) === REQUEST_STATUS.pending;
};
