import React from "react";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider as MuiThemeProvider,
  StyledEngineProvider,
} from "@mui/material/styles";
import {CssBaseline, LinkProps, keyframes} from "@mui/material";
import {grey} from "@mui/material/colors";

export const pinkGradient: React.CSSProperties = {
  backgroundImage: "linear-gradient(315deg, #FF512F 0%, #DD2476 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
};

const shiftingEffect = keyframes`
  // 0% {
  //   filter: blur(20px);
  //   transform: translate3d(10px, 0px, 0) scale(0.98);
  // }
  // 20% {
  //   transform: translate3d(10px, -10px, 0) scale(0.98);
  // }
  // 40% {
  //   filter: blur(50px);
  //   transform: translate3d(-20px, 0px, 0) scale(0.98);
  // }
  // 60% {
  //   transform: translate3d(-15px, 15px, 0) scale(0.98);
  // }
  // 80% {
  //   transform: translate3d(0px, 25px, 0) scale(0.98);
  // }
  // 100% {
  //   filter: blur(20px);
  //   transform: translate3d(10px, 0px, 0) scale(0.98);
  // }
  // 0% {
  //   background: #FF512F;
  // }
  // 50% {
  //   background: #DD2476;
  // }
  // 100% {
  //   background: #FF512F;
  // }
`;

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
      "linear-gradient(45deg, rgb(0, 136, 255) 0%, rgb(153, 0, 255) 100%)",
    // background: "linear-gradient(315deg, #FF512F 0%, #DD2476 100%)",
    filter: "blur(15px)",
    animation: `${shiftingEffect} 6s linear infinite`,
    opacity: 0.8,
  },
};

export const lightBackground = {
  backgroundColor: grey[50],
  zIndex: 0,
};

export const polkaDotsBackground = {
  backgroundImage: `radial-gradient(${grey[300]} 3%, transparent 3%), radial-gradient(${grey[300]} 3%, transparent 3%)`,
  backgroundPosition: "0px 0px, 28px 28px",
  backgroundSize: "56px 56px",
  backgroundColor: "transparent",
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
    color: "rgba(0,0,0,0.6)",
  },
  body2: {
    fontFamily: "Inter",
    fontWeight: 400,
    fontSize: "18.00px",
    color: "rgba(0,0,0,0.6)",
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
      colorPrimary: {color: "white"},
      filled: {backgroundColor: grey[100]},
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
