import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    // Verificar se há preferência de tema armazenada
    const savedTheme = localStorage.getItem('isDarkTheme');
    return savedTheme === 'true' ? true : false;
  });

  useEffect(() => {
    // Armazenar a preferência de tema no localStorage
    localStorage.setItem('isDarkTheme', isDarkTheme);
    document.body.classList.toggle('dark-theme', isDarkTheme);
  }, [isDarkTheme]);

  return (
    <ThemeContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
