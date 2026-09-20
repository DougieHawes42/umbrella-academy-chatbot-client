import { useState } from "react";

// import styles
import "./style.scss";

const ChooseAvatar = ({ selectedAvatar, handleAvatarClick }) => {
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
