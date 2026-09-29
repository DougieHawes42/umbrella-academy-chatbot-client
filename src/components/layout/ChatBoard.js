import { useSelector } from "react-redux";

// style imports
import "./style.scss";

import { characters } from "../../assets/text/characterData.js";

const ChatBoard = () => {
  const messages = useSelector((state) => state.chat.messages);

  const selectedAvatar = useSelector((state) => state.avatar.selectedAvatar);

  const selectedUsername = useSelector(
    (state) => state.avatar.selectedUsername,
  );

  return (
    <div className="chat-board">
      {messages.map((message) => {
        const isUser = message.role === "user";

        const character = characters.find(
          (char) => char.id === message.characterId,
        );

        return (
          <div
            key={message.id}
            className={`chat-message ${isUser ? "chat-message-user" : "chat-message-character"}`}>
            <img
              src={isUser ? selectedAvatar : character.image}
              alt={isUser ? selectedUsername : character.name}
              className="chat-message-avatar"
            />
            <div className="chat-message-body">
              <div className="chat-message-name">
                {isUser ? selectedUsername : character.name}
              </div>
              <div className="chat-message-content">{message.content}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ChatBoard;
