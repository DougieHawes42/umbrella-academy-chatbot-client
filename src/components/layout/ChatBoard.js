import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

// style imports
import "./style.scss";

import { characters } from "../../assets/text/characterData.js";

const ChatBoard = ({ isSubmitting }) => {
  const chatBoardRef = useRef(null);

  const messages = useSelector((state) => state.chat.messages);

  const selectedAvatar = useSelector((state) => state.avatar.selectedAvatar);

  const selectedUsername = useSelector(
    (state) => state.avatar.selectedUsername,
  );

  const selectedCharacter = useSelector(
    (state) => state.character.selectedCharacter,
  );

  const selectedCharacterData = characters.find(
    (character) => character.id === selectedCharacter,
  );

  useEffect(() => {
    if (chatBoardRef.current) {
      chatBoardRef.current.scrollTop = chatBoardRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="chat-board" ref={chatBoardRef}>
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
      {isSubmitting && selectedCharacterData && (
        <div className="chat-message chat-message-characer chat-message-laoding">
          <img
            src={selectedCharacterData.image}
            alt={selectedCharacterData.name}
            className="chat-message-avatar"
          />
          <div className="chat-message-body">
            <div className="chat-message-name">
              {selectedCharacterData.name}
            </div>
            <div className="chat-message-content">
              {selectedCharacterData.name} is replying<span>.</span>
              <span>.</span>
              <span>.</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBoard;
