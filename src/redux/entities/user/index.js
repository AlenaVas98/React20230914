import { createSlice } from "@reduxjs/toolkit";
import { normalizedUsers } from "../../../constans/mock-normalized";

const initialState = {
  entities: normalizedUsers.reduce((acc, users) => {
    acc[users.id] = users;
    return acc;
  }, {}),
  ids: normalizedUsers.map(({ id }) => id),
};

const { reducer } = createSlice({
  name: "user",
  initialState,
});

export default reducer;
