import React from "react";
import type {NextPage} from "next";
import Head from "next/head";
import Image from "next/image";
import {Container, Stack, Box, Typography, Link} from "@mui/material";
import theme, {pinkGradient, lightBackground} from "../styles/theme";
import SoftwareProject from "../components/SoftwareProject";
import CareerPosition from "../components/CareerPosition";
import type {ISoftwareProject, ICareerPosition} from "../interfaces";
import {listSoftwareProjects} from "../content/projects";
import {listCareerPositions} from "../content/education";

const Home: NextPage = () => {
  const projects = listSoftwareProjects();
  const positions = listCareerPositions();

  return (
    <>
      <Head>
        <title>Nathalia Campos</title>
        <meta name="description" content="Nathalia Campos' personal website." />
      </Head>
      <Stack component="main" alignItems="center">
        <Bio />
        <SoftwareProjects projects={projects} />
        <Education positions={positions} />
        <Research />
      </Stack>
    </>
  );
};

const Bio = () => {
  return (
    <Container>
      <Stack
        direction={{xs: "column", md: "row"}}
        justifyContent="space-between"
        alignItems="center"
        paddingY={{xs: 4, md: 8, lg: 12}}
      >
        <Stack justifyContent="center">
          <Typography
            variant="h1"
            textAlign={{xs: "center", md: "left"}}
            gutterBottom
          >
            <span style={pinkGradient}>Hi there</span> 👋 <br />{" "}
            <span style={pinkGradient}>I&apos;m Nathalia</span>
          </Typography>
          <Typography
            variant="subtitle1"
            textAlign={{xs: "center", md: "left"}}
          >
            I&apos;m an engineer and a PhD student at{" "}
            <Link
              href="https://taltech.ee/en/"
              target="_blank"
              rel="noreferrer"
            >
              TalTech
            </Link>
            .
          </Typography>
          <Typography
            variant="subtitle1"
            textAlign={{xs: "center", md: "left"}}
          >
            In my free time, I love to code and experiment with AI.
          </Typography>
        </Stack>
        <Box
          sx={{
            width: 300,
            height: 300,
            position: "relative",
            margin: theme.spacing(3),
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
    </Container>
  );
};

interface SoftwareProjectsProps {
  projects: ISoftwareProject[];
}

const SoftwareProjects = (props: SoftwareProjectsProps) => {
  return (
    <Box width="100%" sx={lightBackground}>
      <Container>
        <Stack paddingY={{xs: 4, md: 8, lg: 12}}>
          <Typography variant="h2" textAlign="center" gutterBottom>
            Projects
          </Typography>
          <Typography
            variant="subtitle1"
            textAlign="center"
            marginBottom={{xs: 8}}
          >
            In my free time, I love to code and experiment with AI.
          </Typography>
          <Stack gap={{xs: 8, md: 12}}>
            {props.projects.map((project, index) => (
              <SoftwareProject key={index} project={project} />
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

interface EducationProps {
  positions: ICareerPosition[];
}

const Education = (props: EducationProps) => {
  const dottedLinesCSS = {
    ":after": {
      content: '""',
      position: "absolute",
      zIndex: -1,
      top: 0,
      bottom: 0,
      left: "50%",
      borderLeft: `2px dashed ${theme.palette.grey[400]}`,
    },
  };

  return (
    <Container>
      <Stack paddingY={{xs: 4, md: 8, lg: 12}}>
        <Typography variant="h2" textAlign="center" marginBottom={{xs: 8}}>
          Education
        </Typography>
        <Box sx={{position: "relative"}}>
          <Stack spacing={{xs: 8, md: 12}} sx={dottedLinesCSS}>
            {props.positions.map((position, index) => (
              <CareerPosition key={index} position={position} />
            ))}
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};

const Research = () => {
  return (
    <Container>
      <Stack paddingY={{xs: 4, md: 8}}>
        <Typography variant="h2" textAlign="center" marginBottom={{xs: 8}}>
          Research
        </Typography>
      </Stack>
    </Container>
  );
};

export default Home;
