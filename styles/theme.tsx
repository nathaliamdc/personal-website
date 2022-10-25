import React from "react";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider as MuiThemeProvider,
  StyledEngineProvider,
} from "@mui/material/styles";
import {CssBaseline, LinkProps} from "@mui/material";

export const pinkGradient = {
  backgroundImage: "linear-gradient(315deg, #FF512F 0%, #DD2476 100%)",
  "-webkit-background-clip": "text",
  "-webkit-text-fill-color": "transparent",
};

export const blueGradient = {
  backgroundImage: "linear-gradient(315deg, #2af598 0%, #009efd 100%);",
  "-webkit-background-clip": "text",
  "-webkit-text-fill-color": "transparent",
};

export const boxShadowGradient = {
  position: "relative",
  background: "white",
  ":before": {
    content: '""',
    zIndex: -1,
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    background:
      "linear-gradient( 65.9deg,  #0052d4 5.5%, #607eff 54.2%, #002ba2 55.2%, #DD2476 98.4% )",
    transform: "translate3d(0px, 10px, 0) scale(0.98)",
    filter: "blur(45px)",
    opacity: "var(0.7)",
    transition: "opacity 0.3s",
    borderRadius: "inherit",
  },
  "::after": {
    content: '""',
    zIndex: -1,
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    background: "inherit",
    borderRadius: "inherit",
  },
};

export const darkBackground = {
  backgroundColor: "rgba(0,0,0,0.9)",
  zIndex: 0,
};

const borderRadius = 12;

const typography = {
  fontSize: 18,
  fontFamily: `"Inter","Helvetica","Arial",sans-serif`,
  h1: {
    fontFamily: "Inter",
    fontWeight: 800,
    fontSize: "101.01px",
    lineHeight: 1.25,
    color: "rgba(0,0,0)",
  },
  h2: {
    fontFamily: "Inter",
    fontWeight: 800,
    fontSize: "75.78px",
    color: "rgba(0,0,0)",
  },
  h3: {
    fontFamily: "Inter",
    fontWeight: 700,
    fontSize: "56.85px",
    color: "rgba(0,0,0)",
  },
  h4: {
    fontFamily: "Inter",
    fontWeight: 700,
    fontSize: "42.65px",
    color: "rgba(0,0,0)",
  },
  h5: {
    fontFamily: "Inter",
    fontWeight: 700,
    fontSize: "31.99px",
    color: "rgba(0,0,0)",
  },
  h6: {
    fontFamily: "Inter",
    fontWeight: 700,
    fontSize: "20.00px",
    color: "rgba(0,0,0)",
  },
  subtitle1: {
    fontFamily: "Inter",
    fontWeight: 600,
    fontSize: "24.00px",
    color: "rgba(0,0,0,0.7)",
  },
  subtitle2: {
    fontFamily: "Inter",
    fontWeight: 400,
    fontSize: "20.00px",
  },
  body1: {
    fontFamily: "Inter",
    fontWeight: 600,
    fontSize: "24.00px",
    color: "rgba(0,0,0,0.7)",
  },
  body2: {
    fontFamily: "Inter",
    fontWeight: 400,
    fontSize: "18.00px",
    color: "rgba(0,0,0,0.7)",
  },
  button: {
    fontFamily: "Inter",
    fontWeight: 500,
    fontSize: "18.00px",
    textTransform: undefined,
  },
  caption: {
    fontFamily: "Inter",
    fontSize: "13.51px",
  },
  overline: {
    fontFamily: "Inter",
  },
};

const palette = {
  primary: {
    main: "#dd2476",
    light: "#ff62a5",
    dark: "#a6004b",
  },
  secondary: {
    main: "#0052d4",
    light: "#607eff",
    dark: "#002ba2",
  },
  background: {
    default: "#FFFFFF",
  },
  common: {
    black: "#171616",
  },
  success: {
    light: "#8FF33D",
    main: "#79C42D",
    dark: "#1b5e20",
  },
  warning: {
    light: "#ffdb5b",
    main: "#F1AA26",
    dark: "#ba7b00",
  },
};

const breakpoints = {
  values: {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1373,
    xl: 1536,
  },
};

const components = {
  MuiAppBar: {
    defaultProps: {
      elevation: 0,
    },
    styleOverrides: {
      root: {
        backgroundColor: "inherit",
        color: "inherit",
      },
    },
  },
  MuiToolbar: {
    defaultProps: {
      disableGutters: true,
      color: "inherit",
      position: "fixed",
    },
  },
  MuiButtonBase: {
    defaultProps: {
      disableRipple: true,
    },
  },
  MuiLink: {
    defaultProps: {
      underline: "none",
    } as LinkProps,
    styleOverrides: {
      root: {
        fontWeight: 600,
      },
    },
  },
  MuiChip: {
    styleOverrides: {
      root: {...typography["body2"]},
    },
  },
};

var theme = createTheme({
  shape: {
    borderRadius: borderRadius, // defaults to 4
  },
  palette: palette,
  breakpoints: breakpoints,
  typography: typography,
  components: components,
});

// makes typography responsive
theme = responsiveFontSizes(theme);

// shadow values were taken from Vercel (vercel.com)
theme.shadows[1] = "0px 2px 4px rgba(0,0,0,0.1)"; // shadow-smallest
theme.shadows[2] = "0px 4px 8px rgba(0,0,0,0.12)"; // shadow-extra-small
theme.shadows[3] = "0 5px 10px rgba(0,0,0,0.12)"; // shadow-small
theme.shadows[4] = "0 8px 30px rgba(0,0,0,0.12)"; // shadow-medium
theme.shadows[5] = "0 30px 60px rgba(0,0,0,0.12)"; // shadow-large

export const ThemeProvider = (props: {children: React.ReactNode}) => {
  return (
    <StyledEngineProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <CssBaseline>{props.children}</CssBaseline>
      </MuiThemeProvider>
    </StyledEngineProvider>
  );
};

export default theme;
