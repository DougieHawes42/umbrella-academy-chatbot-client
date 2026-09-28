import { createSlice } from "@reduxjs/toolkit";

const savedMessages = JSON.parse(localStorage.getItem("messages")) || [];

const initialState = {
  messages: savedMessages ? JSON.parse(savedMessages) : [],
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    addMessage: (state, action) => {
      state.messages.push(action.payload);

      localStorage.setItem("chatMessages", JSON.stringify(state.messages));
    },
    clearMessages: (state) => {
      state.messages = [];

      localStorage.setItem("messages", JSON.stringify("chatMessages"));
    },
  },
});

export const { addMessage, clearMessages } = chatSlice.actions;

export default chatSlice.reducer;
