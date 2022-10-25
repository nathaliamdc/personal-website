import React from "react";
import Image, {StaticImageData} from "next/image";
import {Grid, Stack, Box, Chip, Typography} from "@mui/material";
import theme, {boxShadowGradient} from "../styles/theme";
import {IProject} from "../interfaces";

interface ProjectProps {
  project: IProject;
}

const Project = (props: ProjectProps) => {
  return (
    <Grid
      container
      marginY={{xs: 2}}
      paddingX={{xs: 2, sm: 4, md: 6}}
      paddingY={{xs: 4, sm: 6, md: 8}}
      sx={{
        ...boxShadowGradient,
        borderRadius: `${theme.shape.borderRadius}px`,
      }}
    >
      <Grid item xs={12} md={6} lg={5}>
        <Stack spacing={4}>
          <Header
            name={props.project.name}
            image={props.project.logo}
            url={props.project.websiteURL}
          />
          <Description text={props.project.description} />
          <TechStack techStack={props.project.techStack} />
        </Stack>
      </Grid>
      <Grid item xs={12} md={6} lg={7}>
        <Preview name={props.project.name} image={props.project.image} />
      </Grid>
    </Grid>
  );
};

interface HeaderProps {
  name: string;
  image: StaticImageData;
  url: string;
}

const Header = (props: HeaderProps) => {
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
        height: {xs: 300, md: 400},
        position: "relative",
        boxShadow: theme.shadows[1],
        border: "1px solid linear-gradient(315deg, #2af598 0%, #009efd 100%)",
        borderRadius: `${theme.shape.borderRadius}px`,
        marginLeft: {xs: 0, md: 4, lg: 8},
        marginTop: {xs: 4, md: 0},
      }}
    >
      <Image
        src={props.image.src}
        alt={props.name}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        style={{
          borderRadius: `${theme.shape.borderRadius}px`,
        }}
      />
    </Box>
  );
};

interface TechStackProps {
  techStack: string[];
}

const TechStack = (props: TechStackProps) => {
  return (
    <Stack spacing={1}>
      <Typography variant="overline">Tech stack</Typography>
      <Stack direction="row" gap={{xs: 1, md: 1.5}} flexWrap="wrap">
        {props.techStack.map((tech, index) => (
          <Chip
            key={index}
            label={tech}
            // sx={{
            //   backgroundColor: theme.palette.secondary.light,
            //   color: "white",
            // }}
          />
        ))}
      </Stack>
    </Stack>
  );
};

export default Project;
