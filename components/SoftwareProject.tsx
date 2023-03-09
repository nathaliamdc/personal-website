import React from "react";
import Image, {StaticImageData} from "next/image";
import {
  Grid,
  Stack,
  Box,
  Chip,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import theme, {boxShadowGradient} from "../styles/theme";
import {ISoftwareProject} from "../interfaces";
import {VscGlobe} from "react-icons/vsc";

interface ProjectProps {
  project: ISoftwareProject;
}

const Project = (props: ProjectProps) => {
  return (
    <Grid
      container
      marginY={{xs: 2}}
      paddingX={{xs: 2, sm: 4, md: 6}}
      paddingY={{xs: 3, sm: 6, md: 8}}
      sx={{
        ...boxShadowGradient,
        borderRadius: `${theme.shape.borderRadius}px`,
      }}
    >
      <Grid item xs={12}>
        <Stack spacing={4}>
          <Header
            name={props.project.name}
            image={props.project.logo}
            url={props.project.websiteURL}
          />
          <Description>{props.project.description}</Description>
          <TechStack tools={props.project.techStack} />
        </Stack>
      </Grid>
      {/* <Grid item xs={12} md={6} lg={7}>
        <Preview name={props.project.name} image={props.project.image} />
      </Grid> */}
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
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <Box
        sx={{
          height: {xs: 35, md: 50},
          position: "relative",
          flexGrow: 1,
        }}
        component="a"
        href={props.url}
        target="_blank"
        rel="noreferrer"
      >
        <Image
          src={props.image.src}
          alt={props.name}
          fill
          sizes="100vw"
          style={{
            objectFit: "contain",
            objectPosition: "left center",
          }}
        />
      </Box>
      <Box>
        <Tooltip title="Website">
          <IconButton LinkComponent="a" href={props.url} target="_blank">
            <VscGlobe size={25} />
          </IconButton>
        </Tooltip>
      </Box>
    </Stack>
  );
};

const Description = (props: {children: string}) => {
  return <Typography variant="body1">{props.children}</Typography>;
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
        fill
        sizes="100vw"
        style={{
          borderRadius: `${theme.shape.borderRadius}px`,
          objectFit: "cover",
          objectPosition: "center",
        }}
      />
    </Box>
  );
};

interface TechStackProps {
  tools: string[];
}

const TechStack = (props: TechStackProps) => {
  return (
    <Stack spacing={1}>
      <Typography variant="overline">Tech stack</Typography>
      <Stack direction="row" gap={{xs: 1, md: 1.5}} flexWrap="wrap">
        {props.tools.map((tech, index) => (
          <Chip key={index} label={tech} />
        ))}
      </Stack>
    </Stack>
  );
};

export default Project;
