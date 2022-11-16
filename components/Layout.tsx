import React from "react";
import {Box, Toolbar} from "@mui/material";
import {polkaDotsBackground} from "../styles/theme";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  return (
    <Box sx={polkaDotsBackground}>
      <Header />
      <Toolbar />
      {props.children}
      <Footer />
    </Box>
  );
};

export default Layout;
