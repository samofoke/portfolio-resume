import React, { createContext, useContext, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { lightTheme, darkTheme } from "./MainThemes";

const ThemeContext = createContext({
  darkMode: false, // default value
  toggleTheme: () => {}, // default empty function
});

export const useThemeSwitcher = () => useContext(ThemeContext);

const ThemeSwitcher = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeSwitcher;
