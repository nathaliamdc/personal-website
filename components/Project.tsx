import React from "react";
import Image, {StaticImageData} from "next/image";
import {Grid, Stack, Box, Typography, Chip} from "@mui/material";
import theme from "../styles/theme";
import {IProject} from "../interfaces";

interface ProjectProps {
  project: IProject;
}

const Project = (props: ProjectProps) => {
  return (
    <Grid container spacing={{xs: 4, md: 8, lg: 12}}>
      <Grid item xs={12} md={6}>
        <Stack spacing={4} justifyContent="center">
          <Logo
            name={props.project.name}
            image={props.project.logo}
            url={props.project.websiteURL}
          />
          <Description text={props.project.description} />
          <TechStack techStack={props.project.techStack} />
        </Stack>
      </Grid>
      <Grid item xs={12} md={6}>
        <Preview name={props.project.name} image={props.project.image} />
      </Grid>
    </Grid>
  );
};

interface LogoProps {
  name: string;
  image: StaticImageData;
  url: string;
}

const Logo = (props: LogoProps) => {
  return (
    <Box
      sx={{
        height: {xs: 35, md: 40},
        position: "relative",
      }}
      component="a"
      href={props.url}
      target="_blank"
      rel="noreferrer"
    >
      <Image
        src={props.image.src}
        alt={props.name}
        layout="fill"
        objectFit="contain"
        objectPosition="left center"
      />
    </Box>
  );
};

const Description = (props: {text: string}) => {
  return <Typography variant="body1">{props.text}</Typography>;
};

interface PreviewProps {
  name: string;
  image: StaticImageData;
}

const Preview = (props: PreviewProps) => {
  return (
    <Box
      sx={{
        height: {xs: 300, md: 300},
        position: "relative",
        boxShadow: theme.shadows[2],
        borderRadius: `${theme.shape.borderRadius}px`,
      }}
    >
      <Image
        src={props.image.src}
        alt={props.name}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
    </Box>
  );
};

interface TechStackProps {
  techStack: string[];
}

const TechStack = (props: TechStackProps) => {
  return (
    <Stack direction="row" gap={1} flexWrap="wrap">
      {props.techStack.map((tech, index) => (
        <Chip key={index} label={tech} />
      ))}
    </Stack>
  );
};

export default Project;
