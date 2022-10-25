import React from "react";
import {Container, Toolbar} from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  return (
    <>
      <Header />
      <Toolbar />
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
