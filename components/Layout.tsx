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
      <Container sx={{paddingY: {xs: 3, md: 6, lg: 10}}}>
        <Toolbar />
        {props.children}
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
