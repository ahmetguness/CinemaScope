import { configureStore } from "@reduxjs/toolkit";
import DimensionSlice from "./DimensionSlice";
import MovieSlice from "./MovieSlice";
import ActorSlice from "./ActorSlice";
import GenreSlice from "./GenreSlice";

const store = configureStore({
  reducer: {
    dimension: DimensionSlice.reducer,
    movie: MovieSlice.reducer,
    actor: ActorSlice.reducer,
    genre: GenreSlice.reducer,
  },
});

export default store;
