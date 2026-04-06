import { createTheme, alpha } from "@mui/material/styles";

// Shared design tokens
const fontHeading = `'Space Grotesk', 'Archivo', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`;
const fontBody = `'Archivo', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif`;

const sharedTypography = {
  fontFamily: fontBody,
  h1: {
    fontFamily: fontHeading,
    fontWeight: 700,
    letterSpacing: "-0.02em",
    lineHeight: 1.1,
  },
  h2: {
    fontFamily: fontHeading,
    fontWeight: 700,
    letterSpacing: "-0.02em",
    lineHeight: 1.15,
  },
  h3: {
    fontFamily: fontHeading,
    fontWeight: 600,
    letterSpacing: "-0.015em",
    lineHeight: 1.2,
  },
  h4: {
    fontFamily: fontHeading,
    fontWeight: 600,
    letterSpacing: "-0.01em",
    lineHeight: 1.25,
  },
  h5: {
    fontFamily: fontHeading,
    fontWeight: 500,
    letterSpacing: "-0.005em",
    lineHeight: 1.3,
  },
  h6: {
    fontFamily: fontHeading,
    fontWeight: 600,
    letterSpacing: 0,
    lineHeight: 1.4,
  },
  body1: {
    fontFamily: fontBody,
    fontSize: "1rem",
    lineHeight: 1.65,
  },
  body2: {
    fontFamily: fontBody,
    fontSize: "0.9rem",
    lineHeight: 1.6,
  },
  button: {
    fontFamily: fontHeading,
    fontWeight: 600,
    textTransform: "none",
    letterSpacing: "0.01em",
  },
};

const sharedShape = { borderRadius: 12 };

const buildComponents = (palette) => ({
  MuiCssBaseline: {
    styleOverrides: {
      body: {
        scrollBehavior: "smooth",
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
      },
      "@media (prefers-reduced-motion: reduce)": {
        "*, *::before, *::after": {
          animationDuration: "0.001ms !important",
          transitionDuration: "0.001ms !important",
        },
      },
    },
  },
  MuiButton: {
    defaultProps: { disableElevation: true },
    styleOverrides: {
      root: {
        borderRadius: 10,
        paddingInline: 22,
        paddingBlock: 10,
        cursor: "pointer",
        transition: "background-color 200ms ease, color 200ms ease, box-shadow 200ms ease, border-color 200ms ease",
        "&:focus-visible": {
          outline: `2px solid ${palette.primary.main}`,
          outlineOffset: 2,
        },
      },
      containedPrimary: {
        color: palette.mode === "light" ? "#FFFFFF" : "#0B0B0F",
        "&:hover": {
          boxShadow: `0 8px 24px ${alpha(
            palette.primary.main,
            palette.mode === "dark" ? 0.22 : 0.35
          )}`,
        },
      },
      outlined: {
        borderWidth: 1.5,
        "&:hover": { borderWidth: 1.5 },
      },
    },
  },
  MuiIconButton: {
    styleOverrides: {
      root: {
        cursor: "pointer",
        transition: "background-color 200ms ease, color 200ms ease",
        "&:focus-visible": {
          outline: `2px solid ${palette.primary.main}`,
          outlineOffset: 2,
        },
      },
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        backgroundImage: "none",
      },
    },
  },
  MuiAppBar: {
    styleOverrides: {
      root: {
        backdropFilter: "saturate(180%) blur(10px)",
      },
    },
  },
  MuiLink: {
    styleOverrides: {
      root: {
        cursor: "pointer",
        transition: "color 200ms ease",
        "&:focus-visible": {
          outline: `2px solid ${palette.primary.main}`,
          outlineOffset: 2,
          borderRadius: 2,
        },
      },
    },
  },
  MuiTextField: {
    defaultProps: { variant: "outlined" },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        borderRadius: 10,
      },
    },
  },
});

// Light theme — warm-neutral base with a vibrant accent
const lightPalette = {
  mode: "light",
  primary: {
    main: "#E8751A", // keep brand accent, but used deliberately
    light: "#FFA15A",
    dark: "#B85400",
    contrastText: "#FFFFFF",
  },
  secondary: {
    main: "#1F2937", // deep slate for contrast
    light: "#374151",
    dark: "#111827",
    contrastText: "#FFFFFF",
  },
  background: {
    default: "#FDF7E4",
    paper: "#FFFFFF",
  },
  link: {
    main: "#0F766E",
  },
  text: {
    primary: "#0F172A", // slate-900 — 4.5:1+ on both backgrounds
    secondary: "#475569", // slate-600 — meets contrast minimum
  },
  divider: "rgba(15, 23, 42, 0.12)",
};

const lightTheme = createTheme({
  palette: lightPalette,
  shape: sharedShape,
  typography: sharedTypography,
  components: buildComponents(lightPalette),
});

// Dark theme — darker graphite base with restrained warm/cool accents
const darkPalette = {
  mode: "dark",
  primary: {
    main: "#E06A3B",
    light: "#F09169",
    dark: "#B54E24",
    contrastText: "#05070A",
  },
  secondary: {
    main: "#53B8AE",
    light: "#80D1C8",
    dark: "#2B867D",
    contrastText: "#05070A",
  },
  background: {
    default: "#05070A",
    paper: "#0D1117",
  },
  link: {
    main: "#68C7BD",
  },
  text: {
    primary: "#F4F7FB",
    secondary: "#98A3B4",
  },
  divider: "rgba(148, 163, 184, 0.14)",
};

const darkTheme = createTheme({
  palette: darkPalette,
  shape: sharedShape,
  typography: sharedTypography,
  components: buildComponents(darkPalette),
});

export { lightTheme, darkTheme };
