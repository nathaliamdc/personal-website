import type {NextPage} from "next";
import Head from "next/head";
import Image from "next/image";
import {Container, Stack, Box, Typography, Link} from "@mui/material";
import theme, {pinkGradient, darkBackground} from "../styles/theme";
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
      <Stack component="main" alignItems="center">
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

interface ProjectsProps {
  projects: IProject[];
}

const Projects = (props: ProjectsProps) => {
  return (
    <Box width="100%" sx={darkBackground}>
      <Container>
        <Stack paddingY={{xs: 4, md: 8, lg: 12}}>
          <Typography
            variant="h2"
            textAlign="center"
            color="white"
            gutterBottom
          >
            Projects
          </Typography>
          <Typography
            variant="subtitle1"
            textAlign="center"
            color="white"
            marginBottom={{xs: 8}}
          >
            In my free time, I love to code and experiment with AI.
          </Typography>
          <Stack gap={{xs: 8, md: 12}}>
            {props.projects.map((project, index) => (
              <Project key={index} project={project} />
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

const Education = () => {
  return (
    <Container>
      <Stack paddingY={{xs: 4, md: 8, lg: 12}}>
        <Typography variant="h2" textAlign="center" marginBottom={{xs: 8}}>
          Education
        </Typography>
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
