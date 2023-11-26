import React, { createContext, useContext, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { lightTheme, darkTheme } from "./MainThemes";

const ThemeContext = createContext();

export const useThemeSwitcher = () => useContext(ThemeContext);

const ThemeSwitcher = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toogleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toogleTheme }}>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeSwitcher;
