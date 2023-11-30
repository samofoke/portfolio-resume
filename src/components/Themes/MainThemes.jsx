import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#FDF7E4",
      light: "#FAEED1",
      dark: "#DED0B6",
    },
    secondary: {
      main: "#BBAB8C",
    },
    background: {
      default: "rgb(253, 247, 228)",
      paper: "rgb(250, 238, 209)",
    },
    text: {
      primary: "#000000",
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
      primary: "#FF8C00",
      secondary: "#B3B3B3",
    },
  },
});

export { lightTheme, darkTheme };
