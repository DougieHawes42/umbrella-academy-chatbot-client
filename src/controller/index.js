import { useState } from "react";
import {
  placeholders,
  submitButtonTexts,
} from "../assets/text/placeholders.js";
import avatarImage from "../assets/media/user.png";

export const controller = (req, res) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [chatInputPlaceholder, setChatInputPlaceholder] = useState(
    placeholders[0],
  );
  const [submitButtonText, setSubmitButtonText] = useState(
    submitButtonTexts[0],
  );
  const [selectedAvatar, setSelectedAvatar] = useState(avatarImage);

  const handleAvatarClick = () => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";
    fileInput.onchange = (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setSelectedAvatar(e.target.result);
        };
        reader.readAsDataURL(file);
      }
    };
    fileInput.click();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setChatInputPlaceholder(
      placeholders[Math.floor(Math.random() * placeholders.length)],
    );
    setSubmitButtonText(
      submitButtonTexts[Math.floor(Math.random() * submitButtonTexts.length)],
    );
  };

  return {
    isDarkMode,
    setIsDarkMode,
    chatInputPlaceholder,
    setChatInputPlaceholder,
    submitButtonText,
    setSubmitButtonText,
    selectedAvatar,
    setSelectedAvatar,
    handleAvatarClick,
    handleSubmit,
  };
};
