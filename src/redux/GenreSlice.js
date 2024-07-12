import { createSlice } from "@reduxjs/toolkit";

const GenreSlice = createSlice({
  name: "genre",
  initialState: {
    genres: {},
  },
  reducers: {
    updateGenres(state, action) {
      state.genres = action.payload;
    },
  },
});

export default GenreSlice;
export const { updateGenres } = GenreSlice.actions;
