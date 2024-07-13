import { createSlice } from "@reduxjs/toolkit";

const GenreSlice = createSlice({
  name: "genre",
  initialState: {
    genres: {},
    selectedGenreMovies: {},
    selectedGenreId: "",
  },
  reducers: {
    updateGenres(state, action) {
      state.genres = action.payload;
    },
    updateSelectedGenreId(state, action) {
      state.selectedGenreId = action.payload;
    },
    updateSelectedGenreMovies(state, action) {
      state.selectedGenreMovies = action.payload;
    },
  },
});

export default GenreSlice;
export const {
  updateGenres,
  updateSelectedGenreId,
  updateSelectedGenreMovies,
} = GenreSlice.actions;
