// style imports
import "./style.scss";

const SubmitButton = ({ onSubmit, buttonText }) => {
  return (
    <button className="submit-button" type="submit" onClick={onSubmit}>
      {buttonText}
    </button>
  );
};

export default SubmitButton;
