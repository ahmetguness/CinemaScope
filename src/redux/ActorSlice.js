import { createSlice } from "@reduxjs/toolkit";

const ActorSlice = createSlice({
  name: "actor",
  initialState: {
    actorInfo: {},
  },
  reducers: {
    updateActorInfo(state, action) {
      state.actorInfo = action.payload;
    },
  },
});

export default ActorSlice;
export const { updateActorInfo } = ActorSlice.actions;
