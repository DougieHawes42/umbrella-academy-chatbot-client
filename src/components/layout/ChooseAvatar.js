import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  setSelectedAvatar,
  setSelectedUsername,
} from "../../redux/avatarSlice.js";

import "./style.scss";

const ChooseAvatar = () => {
  const dispatch = useDispatch();

  const selectedAvatar = useSelector((state) => state.avatar.selectedAvatar);
  const selectedUsername = useSelector(
    (state) => state.avatar.selectedUsername,
  );

  const [usernameInput, setUsernameInput] = useState(selectedUsername);

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      dispatch(setSelectedAvatar(reader.result));
    };

    reader.readAsDataURL(file);
  };

  const handleNameChange = (event) => {
    setUsernameInput(event.target.value);
  };

  const handleNameBlur = () => {
    dispatch(setSelectedUsername(usernameInput));
  };

  return (
    <div className="choose-avatar">
      <label htmlFor="avatar-upload">
        <img
          className="choose-avatar-image"
          src={selectedAvatar}
          alt="Choose your avatar"
        />
      </label>

      <input
        id="avatar-upload"
        type="file"
        accept="image/*"
        onChange={handleAvatarChange}
      />

      <input
        className="choose-avatar-name"
        type="text"
        onChange={handleNameChange}
        onBlur={handleNameBlur}
        placeholder="Enter your name"
        value={usernameInput}
      />

      <h2 className="choose-avatar-title">Choose Your Avatar</h2>
    </div>
  );
};

export default ChooseAvatar;
