import { useSelector } from "react-redux";

// style imports
import "./style.scss";

const ChatBoard = () => {
  const messages = useSelector((state) => state.chat.messages);

  return (
    <div className="chat-board">
      {/* Chat messages will be displayed here */}
      {messages.map((message) => (
        <div
          key={message.id}
          className={`chat-message chat-message-${message.role}`}>
          <span className="chat-message-name">
            {message.name || message.role}:
          </span>
          <span className="chat-message-content">{message.content}</span>
        </div>
      ))}
    </div>
  );
};

export default ChatBoard;
