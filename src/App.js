import axios from "axios";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsUmbrella } from "react-icons/bs";

import { addMessage } from "./redux/chatSlice.js";
import { toggleDarkMode } from "./redux/themeSlice.js";

// style imports
import "./assets/style/style.scss";

// component imports
import CharacterGrid from "./components/layout/CharacterGrid.js";
import ChatBoard from "./components/layout/ChatBoard.js";
import ChatInput from "./components/layout/ChatInput.js";
import ChooseAvatar from "./components/layout/ChooseAvatar.js";
import DarkmodeToggle from "./components/layout/DarkmodeToggle.js";
import SubmitButton from "./components/layout/SubmitButton.js";

import { chatInputPlaceholders } from "./assets/text/placeholders.js";

const App = () => {
  const dispatch = useDispatch();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [chatInputValue, setChatInputValue] = useState("testing");

  const userName = useSelector((state) => state.avatar.selectedUsername);
  const darkMode = useSelector((state) => state.theme.darkMode);

  const selectedCharacter = useSelector(
    (state) => state.character.selectedCharacter,
  );

  const messages = useSelector((state) => state.chat.messages);

  const handleSubmit = async () => {
    try {
      setIsSubmitting(true);

      // Keep a copy of the conversation before adding the new message
      const chatHistory = messages;

      console.log("Chat history:", chatHistory);

      dispatch(
        addMessage({
          id: crypto.randomUUID(),
          role: "user",
          content: chatInputValue,
          name: userName,
          characterId: selectedCharacter,
        }),
      );

      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/chat`,
        {
          message: chatInputValue,
          characterId: selectedCharacter,
          userName: userName,
          history: chatHistory,
        },
      );

      dispatch(
        addMessage({
          id: crypto.randomUUID(),
          role: "assistant",
          content: response.data.response,
          characterId: selectedCharacter,
        }),
      );
    } catch (error) {
      console.error("Error submitting chat message:", error);
    } finally {
      setChatInputValue("");
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`app ${darkMode ? "app-darkmode" : "app-lightmode"}`}>
      <div className="chat-dashboard">
        <div className="app-header">
          <BsUmbrella className="app-header-icon" />
          <h1 className="app-title">UA Chat</h1>
          <BsUmbrella className="app-header-icon" />
        </div>

        <ChooseAvatar />

        <DarkmodeToggle
          darkMode={darkMode}
          setIsDarkMode={() => dispatch(toggleDarkMode())}
        />

        <ChatBoard />

        <ChatInput
          placeholder={
            chatInputPlaceholders[
              Math.floor(Math.random() * chatInputPlaceholders.length)
            ]
          }
          value={chatInputValue}
          onChange={(e) => setChatInputValue(e.target.value)}
        />

        <SubmitButton onSubmit={handleSubmit} isSubmitting={isSubmitting} />

        <CharacterGrid />
      </div>
    </div>
  );
};

export default App;
