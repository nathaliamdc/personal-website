import React from "react";
import {Container, Stack, Button, Typography} from "@mui/material";
import {VscGithubInverted} from "react-icons/vsc";

interface FooterProps {}

const Footer = (props: FooterProps) => {
  return (
    <Container maxWidth="xl">
      <Stack
        direction="row"
        spacing={2}
        paddingBottom={2}
        alignItems="center"
        justifyContent="center"
        flexWrap="wrap"
      >
        <Typography variant="body2">
          Nathalia de Morais Dias Campos © {new Date().getFullYear()}
        </Typography>
        <Button
          startIcon={<VscGithubInverted />}
          color="secondary"
          component="a"
          href="https://github.com/nathaliamdc/personal-website"
          target="_blank"
          rel="noreferrer"
        >
          Source code
        </Button>
      </Stack>
    </Container>
  );
};

export default Footer;
