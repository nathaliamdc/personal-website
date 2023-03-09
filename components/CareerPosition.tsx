import React from "react";
import Image from "next/image";
import {Stack, Box, Chip, Divider, Typography, Link} from "@mui/material";
import {ICareerPosition, IInstitution} from "../interfaces";
import theme from "../styles/theme";

interface CareerPositionProps {
  position: ICareerPosition;
}

const CareerPosition = (props: CareerPositionProps) => {
  return (
    <Stack spacing={2}>
      <Timeline>{props.position.duration}</Timeline>
      <Stack direction={{xs: "column", md: "row"}} gap={{xs: 2, md: 4, lg: 18}}>
        <Stack
          flexBasis="50%"
          order={{xs: 2, md: 1}}
          sx={{backgroundColor: "white"}}
          alignItems={{xs: "center", md: "flex-end"}}
        >
          <Title>{props.position.title}</Title>
          <Institutions institutions={props.position.institutions} />
        </Stack>
        <CountryFlag>{props.position.countryCode}</CountryFlag>
      </Stack>
    </Stack>
  );
};

const Timeline = (props: {children: React.ReactNode}) => {
  return <Chip label={props.children} sx={{alignSelf: "center"}} />;
};

const Title = (props: {children: React.ReactNode}) => {
  return (
    <Typography variant="h5" gutterBottom>
      {props.children}
    </Typography>
  );
};

const CountryFlag = (props: {children: React.ReactNode}) => {
  return (
    <Box
      sx={{
        flexBasis: "50%",
        alignSelf: "center",
        order: {xs: 1, md: 2},
      }}
    >
      <Box
        sx={{
          backgroundColor: "white",
          borderRadius: `${theme.shape.borderRadius}px`,
          boxShadow: theme.shadows[2],
          display: "inline-flex",
          padding: {xs: 4, md: 5},
        }}
      >
        <Image
          src={`https://flagcdn.com/64x48/${props.children}.png`}
          width="64"
          height="48"
          alt={`${props.children} flag`}
        />
      </Box>
    </Box>
  );
};

const Institutions = (props: {institutions: IInstitution[]}) => {
  return (
    <Stack
      direction="row"
      divider={<Divider orientation="vertical" flexItem />}
      spacing={1}
    >
      {props.institutions.map((institution, index) => (
        <Link
          key={index}
          href={institution.websiteURL}
          target="_blank"
          rel="noreferrer"
          variant="body1"
        >
          {institution.name}
        </Link>
      ))}
    </Stack>
  );
};

export default CareerPosition;
