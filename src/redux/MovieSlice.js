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

// {"adult": false, "backdrop_path": "/f3sGWbkJ2xDDdXsXps6CRpNnPD3.jpg", "genre_ids": [878, 12, 28], "id": 653346, "media_type": "movie", "original_language": "en", "original_title": "Kingdom of the Planet of the Apes", "overview": "Several generations following Caesar's reign, apes – now the dominant species – live harmoniously while humans have been reduced to living in the shadows. As a new tyrannical ape leader builds his empire, one young ape undertakes a harrowing journey that will cause him to question all he's known about the past and to make choices that will define a future for apes and humans alike.", "popularity": 2336.136, "poster_path": "/gKkl37BQuKTanygYQG1pyYgLVgf.jpg", "release_date": "2024-05-08", "title": "Kingdom of the Planet of the Apes", "video": false, "vote_average": 6.9, "vote_count": 1335}
