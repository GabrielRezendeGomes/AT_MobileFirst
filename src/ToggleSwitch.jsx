import React from 'react';
import { useTheme } from './ThemeContext'; // Importando o contexto
import "./App.css"

const ToggleSwitch = () => {
  const { isDarkTheme, setIsDarkTheme } = useTheme();

  const toggleTheme = () => {
    setIsDarkTheme(prevTheme => !prevTheme);
  };

  return (
    <label className="toggle-switch">
      <input type="checkbox" checked={isDarkTheme} onChange={toggleTheme} />
      <span className="slider"></span>
    </label>
  );
};

export default ToggleSwitch;
