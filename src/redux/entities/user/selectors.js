const selectUserModule = (state) => state.user;

export const selectorUserById = (state, id) => {
  return selectUserModule(state).entities[id];
};
export const selectUserIds = (state) => selectUserModule(state).ids;
