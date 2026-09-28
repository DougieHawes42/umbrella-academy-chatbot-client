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

  const handleClick = async (event) => {
    setButtonText("responding...");

    setButtonText(getRandomButtonText());
  };

  useEffect(() => {
    setButtonText(getRandomButtonText());
  }, []);

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
