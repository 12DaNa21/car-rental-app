import { configureStore } from "@reduxjs/toolkit";

const initialState = {
  tasks: {},
  filters: {
    status: "all",
  },
};

const rootReducer = (state = initialState, action) => {
  return state;
};

export const store = configureStore({
  reducer: rootReducer,
});
