const selectorRestaurantModule = (state) => state.restaurant;

export const selectorRestaurantById = (state, id) =>
  selectorRestaurantModule(state).entities[id];

export const selectorRestaurantIds = (state) =>
  selectorRestaurantModule(state).ids;
