import React from "react";
import Link from "next/link";
import {
  Container,
  Stack,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Tooltip,
  useScrollTrigger,
  Link as MuiLink,
  alpha,
} from "@mui/material";
import {CSSProperties} from "@mui/styled-engine";
import {VscGithubInverted} from "react-icons/vsc";
import {BsLinkedin} from "react-icons/bs";
import theme from "../styles/theme";

interface HeaderProps {}

const Header = (props: HeaderProps) => {
  const scrolled = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  const scrolledCSSProperties: CSSProperties = {
    backgroundColor: alpha(theme.palette.background.default, 0.6),
    backdropFilter: "saturate(.5) blur(5px)",
    borderBottom: `1px solid ${theme.palette.divider}`,
  };

  let appBarCSSProperties: CSSProperties = {
    backgroundColor: "transparent",
    borderBottom: "transparent",
    transition: `all
  ${theme.transitions.duration.standard}ms
  ${theme.transitions.easing.easeInOut}`,
  };

  if (scrolled)
    appBarCSSProperties = {...appBarCSSProperties, ...scrolledCSSProperties};

  return (
    <AppBar sx={appBarCSSProperties}>
      <Container maxWidth="xl">
        <Toolbar>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            flexGrow={1}
          >
            <Logo />
            <Links />
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

const Logo = () => {
  return (
    <Link href="/">
      <Typography variant="h6">Nathalia Campos</Typography>
    </Link>
  );
};

const Links = () => {
  return (
    <Stack direction="row" spacing={1}>
      <Tooltip title="LinkedIn">
        <IconButton
          component="a"
          href="https://www.linkedin.com/in/nathaliamdc/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin size={25} />
        </IconButton>
      </Tooltip>
      <Tooltip title="GitHub">
        <IconButton
          component="a"
          href="https://github.com/nathaliamdc"
          target="_blank"
          rel="noreferrer"
        >
          <VscGithubInverted size={25} />
        </IconButton>
      </Tooltip>
    </Stack>
  );
};

export default Header;
