import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

// style imports
import "./style.scss";

const DarkmodeToggle = ({ darkMode, setIsDarkMode }) => {
  return (
    <div className="darkmode-toggle-button" onClick={setIsDarkMode}>
      {darkMode ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
    </div>
  );
};

export default DarkmodeToggle;
