import React from 'react';
import { useTheme } from '../context/ThemeContext';
// import './ThemeToggle.css'; // Remove this line since App.css handles the styling

const ThemeToggle = () => {
  const { isDarkTheme, toggleTheme } = useTheme();

  return (
    <button 
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={isDarkTheme ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDarkTheme ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>}
    </button>
  );
};

export default ThemeToggle;
