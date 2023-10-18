const selectUserModule = (state) => state.user;

export const selectUserById = (state, id) => {
  return selectUserModule(state).entities[id];
};
export const selectUserIds = (state) => selectUserModule(state).ids;

export const selectUserLoadingStatus = (state) =>
  selectUserModule(state).status;
