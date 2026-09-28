import { useDispatch, useSelector } from "react-redux";

import { setSelectedAvatar } from "../../redux/avatarSlice.js";
import { setUserName } from "../../redux/userSlice.js";

import "./style.scss";

const ChooseAvatar = () => {
  const dispatch = useDispatch();

  const selectedAvatar = useSelector((state) => state.avatar.selectedAvatar);
  const userName = useSelector((state) => state.user.name);

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      dispatch(setSelectedAvatar(reader.result));
    };

    reader.readAsDataURL(file);
  };

  const handleNameBlur = (event) => {
    dispatch(setUserName(event.target.value));
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
        defaultValue={userName}
        onBlur={handleNameBlur}
        placeholder="Enter your name"
      />
      <h2 className="choose-avatar-title">Choose Your Avatar</h2>
    </div>
  );
};

export default ChooseAvatar;
