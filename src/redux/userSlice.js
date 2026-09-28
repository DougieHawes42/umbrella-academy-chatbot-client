import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: localStorage.getItem("userName") || "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserName: (state, action) => {
      state.name = action.payload;
      localStorage.setItem("userName", action.payload);
    },
  },
});

export const { setUserName } = userSlice.actions;

export default userSlice.reducer;
