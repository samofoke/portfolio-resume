import { createTheme } from "@mui/material/styles";
import { green, orange } from "@mui/material/colors";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#76BA99",
      light: "#ADCF9F",
      dark: "#CED89E",
    },
    secondary: {
      main: "#FFDCAE",
    },
    background: {
      default: "rgb(118, 186, 153)",
      paper: "rgb(173, 207, 159)",
    },
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.54)",
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#FF8C00",
      light: "#FFB266",
      dark: "#BF8040",
    },
    secondary: {
      main: "#A5694F",
    },
    background: {
      default: "#121212",
      paper: "#1E1E1E",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#B3B3B3",
    },
  },
});

export { lightTheme, darkTheme };
