import { useEffect, useState } from "react";

import { submitButtonTexts } from "../../assets/text/placeholders.js";

import "./style.scss";

const SubmitButton = ({ onSubmit, isSubmitting }) => {
  const [buttonText, setButtonText] = useState("");

  const getRandomButtonText = () => {
    return submitButtonTexts[
      Math.floor(Math.random() * submitButtonTexts.length)
    ];
  };

  useEffect(() => {
    if (isSubmitting) {
      setButtonText("responding...");
    } else {
      setButtonText(getRandomButtonText());
    }
  }, [isSubmitting]);

  return (
    <button
      className="submit-button"
      disabled={isSubmitting}
      onClick={onSubmit}>
      {buttonText}
    </button>
  );
};

export default SubmitButton;
