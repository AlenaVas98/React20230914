const selectorReviewModule = (state) => state.review;

export const selectorReviewById = (state, id) =>
  selectorReviewModule(state).entities[id];

export const selectorReviewIds = (state) => selectorReviewModule(state).ids;
