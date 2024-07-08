import { configureStore } from "@reduxjs/toolkit";
import DimensionSlice from "./DimensionSlice";

const store = configureStore({
  reducer: {
    dimension: DimensionSlice.reducer,
  },
});

export default store;
