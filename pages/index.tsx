import type {NextPage} from "next";
import Head from "next/head";
import Image from "next/image";
import {Stack, Box, Typography} from "@mui/material";
import theme, {pinkGradient} from "../styles/theme";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Nathalia Campos</title>
        <meta name="description" content="Nathalia Campos' personal website." />
      </Head>
      <Stack component="main" spacing={{xs: 4, md: 8}}>
        <Bio />
        <Projects />
        <Research />
        <Education />
      </Stack>
    </>
  );
};

const Bio = () => {
  return (
    <Stack
      direction={{xs: "column", sm: "row"}}
      justifyContent="space-around"
      alignItems="center"
      spacing={4}
    >
      <Stack justifyContent="center">
        <Typography variant="h1" gutterBottom>
          <span style={pinkGradient}>Hey there</span> 👋 <br />{" "}
          <span style={pinkGradient}>I&apos;m Nathalia</span>
        </Typography>
        <Typography variant="subtitle1">
          An engineer and a PhD student at{" "}
          <a href="https://taltech.ee/en/" target="_blank" rel="noreferrer">
            TalTech
          </a>
          .
        </Typography>
        <Typography variant="subtitle1">
          I also code and experiment with AI in my free time.
        </Typography>
        <Typography variant="subtitle1">Check out my projects.</Typography>
      </Stack>
      <Box
        sx={{
          width: 250,
          height: 250,
          position: "relative",
          margin: {xs: "auto", sm: 0},

          boxShadow: theme.shadows[3],
          borderRadius: `${theme.shape.borderRadius}px`,
        }}
      >
        <Image
          src="/portrait.jpg"
          alt="Nathalia's portrait"
          layout="fill"
          objectFit="cover"
          style={{
            borderRadius: `${theme.shape.borderRadius}px`,
          }}
        />
      </Box>
    </Stack>
  );
};

const Projects = () => {
  return (
    <Stack>
      <Typography variant="h2" textAlign="center">
        Projects
      </Typography>
    </Stack>
  );
};

const Education = () => {
  return (
    <>
      <Typography variant="h2" textAlign="center">
        Education
      </Typography>
    </>
  );
};

const Research = () => {
  return (
    <>
      <Typography variant="h2" textAlign="center">
        Research
      </Typography>
    </>
  );
};

export default Home;
