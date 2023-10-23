import { REQUEST_STATUS } from "../../../constans/statuses";

const selectReviewModule = (state) => state.review;

export const selectReviewById = (state, id) =>
  selectReviewModule(state).entities[id];

export const selectReviewIds = (state) => selectReviewModule(state).ids;

export const selectReviewStatus = (state) => selectReviewModule(state).status;

export const selectReviewLoading = (state) =>
  selectReviewStatus(state) === REQUEST_STATUS.pending;
