import { configureStore } from "@reduxjs/toolkit";
import DimensionSlice from "./DimensionSlice";
import MovieSlice from "./MovieSlice";
import ActorSlice from "./ActorSlice";

const store = configureStore({
  reducer: {
    dimension: DimensionSlice.reducer,
    movie: MovieSlice.reducer,
    actor: ActorSlice.reducer,
  },
});

export default store;
