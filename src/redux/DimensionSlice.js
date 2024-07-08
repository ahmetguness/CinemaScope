import { createSlice } from "@reduxjs/toolkit";

const DimensionSlice = createSlice({
  name: "dimension",
  initialState: {
    width: 0,
    height: 0,
  },
  reducers: {
    updateDimensions(state, action) {
      const [width, height] = action.payload;
      state.height = height;
      state.width = width;
    },
  },
});

export default DimensionSlice;
export const { updateDimensions } = DimensionSlice.actions;
