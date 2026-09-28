import { configureStore } from "@reduxjs/toolkit";

import avatarReducer from "./avatarSlice.js";
import characterReducer from "./characterSlice.js";
import themeReducer from "./themeSlice.js";
import userReducer from "./userSlice.js";

export const store = configureStore({
  reducer: {
    avatar: avatarReducer,
    character: characterReducer,
    theme: themeReducer,
    user: userReducer,
  },
});
