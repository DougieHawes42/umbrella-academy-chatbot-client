import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedCharacter: 1,
};

const characterSlice = createSlice({
  name: "character",
  initialState,
  reducers: {
    setSelectedCharacter: (state, action) => {
      state.selectedCharacter = action.payload;
    },
  },
});

export const { setSelectedCharacter } = characterSlice.actions;

export default characterSlice.reducer;
