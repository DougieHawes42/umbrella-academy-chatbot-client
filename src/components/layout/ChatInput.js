import "./style.scss";

const ChatInput = ({ placeholder, value, onChange, onSubmit }) => {
  return (
    <div className="chat-input">
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            onSubmit();
          }
        }}
      />
    </div>
  );
};

export default ChatInput;
