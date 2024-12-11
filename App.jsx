import { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa"; // Import icons for dark/light mode
import "./App.css"; // Link to your CSS

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav className={`navbar ${darkMode ? "dark" : ""}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <h1>TARAKPATH</h1>
        </div>
        <ul className="navbar-links">
          <li>
            <a href="#algorithm">Algorithm</a>
          </li>
          <li>
            <a href="#pitchrpm">Pitch & RPM</a>
          </li>
          <li>
            <a href="#visualmaintenance">Visual Maintenance</a>
          </li>
          <li>
            <a href="#digitallog">Digital Log Community</a>
          </li>
        </ul>
        <button className="darkmode-btn" onClick={toggleDarkMode}>
          {darkMode ? <FaSun /> : <FaMoon />}{" "}
          {/* Change icon based on dark mode */}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
