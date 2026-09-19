import { useState } from "react";

// import styles
import "./style.scss";

import avatarImage from "../../assets/media/user.png";

const ChooseAvatar = () => {
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

  return (
    <div className="choose-avatar">
      <img
        className="choose-avatar-image"
        src={selectedAvatar}
        alt="Avatar"
        onClick={handleAvatarClick}
      />
      <h2 className="choose-avatar-title">Choose Your Avatar</h2>
    </div>
  );
};

export default ChooseAvatar;
