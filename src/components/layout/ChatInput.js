// style imports
import "./style.scss";

const ChatInput = ({ placeholder }) => {
  return (
    <div className="chat-input">
      <input type="text" placeholder={placeholder} />
    </div>
  );
};

export default ChatInput;
