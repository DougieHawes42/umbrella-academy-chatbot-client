import { createSlice } from "@reduxjs/toolkit";

import userAvatar from "../assets/media/user.png";

const savedAvatar = localStorage.getItem("userAvatar");
const savedUsername = localStorage.getItem("userName");

const initialState = {
  selectedAvatar: savedAvatar || userAvatar,
  selectedUsername: savedUsername || "",
};

const avatarSlice = createSlice({
  name: "avatar",
  initialState,
  reducers: {
    setSelectedAvatar: (state, action) => {
      state.selectedAvatar = action.payload;

      localStorage.setItem("userAvatar", action.payload);
    },

    setSelectedUsername: (state, action) => {
      state.selectedUsername = action.payload;

      localStorage.setItem("userName", action.payload);
    },
  },
});

export const { setSelectedAvatar, setSelectedUsername } = avatarSlice.actions;

export default avatarSlice.reducer;
