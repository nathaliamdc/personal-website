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

// /* Polka dot background */
// body {
//   background-image: radial-gradient(rgb(232, 232, 232) 10%, transparent 10%),
//     radial-gradient(rgb(232, 232, 232) 10%, transparent 10%);
//   background-position: 0px 0px, 48px 48px;
//   background-size: 96px 96px;
//   background-color: rgb(255, 255, 255);
// }

export default Layout;
