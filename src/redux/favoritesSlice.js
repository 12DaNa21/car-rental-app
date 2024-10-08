import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const carId = action.payload;
      const exists = state.find((id) => id === carId);
      if (exists) {
        return state.filter((id) => id !== carId);
      } else {
        return [...state, carId];
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
