const selectorDishModule = (state) => state.dish;

export const selectorDishById = (state, id) =>
  selectorDishModule(state).entities[id];

export const selectorDishIds = (state) => selectorDishModule(state).ids;
