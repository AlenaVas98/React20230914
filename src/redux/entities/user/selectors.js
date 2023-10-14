const selectorUserModule = (state) => state.user;

export const selectorUserById = (state, id) => {
  // console.log(state);
  console.log(id);
  return selectorUserModule(state).entities[id];
};

export const selectorUserIds = (state) => selectorUserModule(state).ids;
