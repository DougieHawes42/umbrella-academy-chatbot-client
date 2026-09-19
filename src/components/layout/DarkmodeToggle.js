import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

// style imports
import "./style.scss";

const DarkmodeToggle = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <div
      className="darkmode-toggle-button"
      onClick={() => setIsDarkMode(!isDarkMode)}>
      {isDarkMode ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
    </div>
  );
};

export default DarkmodeToggle;
