import { createSlice } from "@reduxjs/toolkit";

export const MovieSlice = createSlice({
  name: "movie",
  initialState: {
    movieInfo: {},
    genres: {},
  },
  reducers: {
    updateMovieInfo(state, action) {
      state.movieInfo = action.payload;
    },
    updateGenres(state, action) {
      state.genres = action.payload;
    },
  },
});

export default MovieSlice;
export const { updateMovieInfo, updateGenres } = MovieSlice.actions;
