import type {NextPage} from "next";
import Head from "next/head";
import Image from "next/image";
import {Stack, Box, Typography} from "@mui/material";
import theme, {pinkGradient, blueGradient} from "../styles/theme";
import Project from "../components/Project";
import type {IProject} from "../interfaces";
import {listProjects} from "../content/projects";

const Home: NextPage = () => {
  const projects = listProjects();

  return (
    <>
      <Head>
        <title>Nathalia Campos</title>
        <meta name="description" content="Nathalia Campos' personal website." />
      </Head>
      <Stack component="main" spacing={{xs: 8, md: 12}}>
        <Bio />
        <Projects projects={projects} />
        <Education />
        <Research />
      </Stack>
    </>
  );
};

const Bio = () => {
  return (
    <Stack
      direction={{xs: "column", sm: "row"}}
      justifyContent="space-between"
      alignItems="center"
      spacing={4}
    >
      <Stack justifyContent="center">
        <Typography variant="h1" gutterBottom>
          <span style={pinkGradient}>Hey there</span> 👋 <br />{" "}
          <span style={pinkGradient}>I&apos;m Nathalia</span>
        </Typography>
        <Typography variant="subtitle1">
          I&apos;m an engineer and a PhD student at{" "}
          <a href="https://taltech.ee/en/" target="_blank" rel="noreferrer">
            TalTech
          </a>
          .
        </Typography>
        <Typography variant="subtitle1">
          In my free time, I love to code and experiment with AI.
        </Typography>
      </Stack>
      <Box
        sx={{
          width: 300,
          height: 300,
          position: "relative",
          margin: {xs: "auto", sm: 0},
          boxShadow: theme.shadows[2],
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

interface ProjectsProps {
  projects: IProject[];
}

const Projects = (props: ProjectsProps) => {
  return (
    <Stack>
      <Typography
        variant="h2"
        textAlign="center"
        marginBottom={{xs: 8, md: 12}}
      >
        Projects
      </Typography>
      <Stack gap={{xs: 8, md: 12}}>
        {props.projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </Stack>
    </Stack>
  );
};

const Education = () => {
  return (
    <>
      <Typography
        variant="h2"
        textAlign="center"
        marginBottom={{xs: 8, md: 12}}
      >
        Education
      </Typography>
    </>
  );
};

const Research = () => {
  return (
    <>
      <Typography
        variant="h2"
        textAlign="center"
        marginBottom={{xs: 8, md: 12}}
      >
        Research
      </Typography>
    </>
  );
};

export default Home;
