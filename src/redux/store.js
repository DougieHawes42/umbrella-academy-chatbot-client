import { configureStore } from "@reduxjs/toolkit";

import avatarReducer from "./avatarSlice.js";
import characterReducer from "./characterSlice.js";
import chatReducer from "./chatSlice.js";
import themeReducer from "./themeSlice.js";

export const store = configureStore({
  reducer: {
    avatar: avatarReducer,
    character: characterReducer,
    chat: chatReducer,
    theme: themeReducer,
  },
});
