import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsUmbrella } from "react-icons/bs";

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
  const [chatInputValue, setChatInputValue] = useState("");

  const darkMode = useSelector((state) => state.theme.darkMode);
  const selectedCharacter = useSelector(
    (state) => state.character.selectedCharacter,
  );

  const handleSubmit = async () => {
    console.log("Submitted message:", chatInputValue);
    console.log("Selected character:", selectedCharacter);
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
