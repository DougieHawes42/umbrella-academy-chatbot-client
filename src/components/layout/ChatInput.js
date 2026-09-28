import "./style.scss";

const ChatInput = ({ placeholder, value, onChange }) => {
  return (
    <div className="chat-input">
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default ChatInput;
