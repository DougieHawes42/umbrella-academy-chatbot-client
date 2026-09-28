import { createSlice } from "@reduxjs/toolkit";

import userAvatar from "../assets/media/user.png";

const savedAvatar = localStorage.getItem("userAvatar");

const initialState = {
  selectedAvatar: savedAvatar || userAvatar,
};

const avatarSlice = createSlice({
  name: "avatar",
  initialState,
  reducers: {
    setSelectedAvatar: (state, action) => {
      state.selectedAvatar = action.payload;

      localStorage.setItem("userAvatar", action.payload);
    },
  },
});

export const { setSelectedAvatar } = avatarSlice.actions;

export default avatarSlice.reducer;
