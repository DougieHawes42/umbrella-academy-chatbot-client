import { useState } from "react";
import { BsUmbrella } from "react-icons/bs";

// style imports
import "./assets/style/style.scss";

import CharacterGrid from "./components/layout/CharacterGrid.js";
import ChatBoard from "./components/layout/ChatBoard.js";
import ChatInput from "./components/layout/ChatInput.js";
import ChooseAvatar from "./components/layout/ChooseAvatar.js";
import DarkmodeToggle from "./components/layout/DarkmodeToggle.js";
import SubmitButton from "./components/layout/SubmitButton.js";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={`app ${isDarkMode ? "app-darkmode" : "app-lightmode"}`}>
      <div className="chat-dashboard">
        <div className="app-header">
          <BsUmbrella className="app-header-icon" />
          <h1 className="app-title">UA Chat</h1>
          <BsUmbrella className="app-header-icon" />
        </div>
        <ChooseAvatar />
        <DarkmodeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <ChatBoard />
        <ChatInput />
        <SubmitButton />
        <CharacterGrid />
      </div>
    </div>
  );
};

export default App;
