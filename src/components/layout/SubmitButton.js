import { useState } from "react";

// style imports
import "./style.scss";

const submitButtonTexts = [
  "Hit it",
  "Go for it",
  "Let's go",
  "Do it",
  "Make it happen",
  "Crank it up",
  "Fire away",
  "Launch it",
  "Give it a whirl",
  "Take the plunge",
];

const SubmitButton = () => {
  const [buttonText, setButtonText] = useState(submitButtonTexts[0]);

  const onsubmit = (e) => {
    e.preventDefault();

    setButtonText(
      submitButtonTexts[Math.floor(Math.random() * submitButtonTexts.length)],
    );
  };

  return (
    <button className="submit-button" type="submit" onClick={onsubmit}>
      {buttonText}
    </button>
  );
};

export default SubmitButton;
