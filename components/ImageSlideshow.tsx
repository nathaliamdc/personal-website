import React from "react";
import Image from "next/image";
import {Box, keyframes} from "@mui/material";
import theme from "../styles/theme";

interface ImageSlideshowProps {
  srcList: string[];
}

const slideLeaving = keyframes`
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-100%);
  }
`;

const slideEntering = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0%);
  }
`;

const ImageSlideshow = (props: ImageSlideshowProps) => {
  return (
    <Box
      sx={{
        flexDirection: "row",
        alignItems: "center",
        display: "flex",
        overflow: "hidden",
        position: "relative",
        height: "300px",
        width: "100vw",
      }}
    >
      <Box
        sx={{
          flexShrink: 0,
          position: "absolute",
          animation: `${slideLeaving} 40s linear infinite`,
          minWidth: "100%",
          display: "flex",
        }}
      >
        {props.srcList.map((src, index) => (
          <WrappedImage key={index} src={src} />
        ))}
      </Box>
      <Box
        sx={{
          flexShrink: 0,
          position: "absolute",
          animation: `${slideEntering} 40s linear infinite`,
          minWidth: "100%",
          display: "flex",
          transform: "translateX(100%)",
        }}
      >
        {props.srcList.map((src, index) => (
          <WrappedImage key={index} src={src} />
        ))}
      </Box>
    </Box>
  );
};

const WrappedImage = (props: {src: string}) => {
  return (
    <Box
      sx={{
        width: 300,
        height: 200,
        position: "relative",
        boxShadow: theme.shadows[1],
        border: "1px solid linear-gradient(315deg, #2af598 0%, #009efd 100%)",
        borderRadius: `${theme.shape.borderRadius}px`,
        marginLeft: {xs: 0, md: 4, lg: 8},
        marginTop: {xs: 4, md: 0},
        display: "inline-flex",
        alignSelf: "center",
        marginX: 4,
      }}
    >
      <Image
        src={props.src}
        alt=""
        fill
        sizes="100vw"
        style={{
          borderRadius: `${theme.shape.borderRadius}px`,
          objectFit: "cover",
          objectPosition: "center"
        }} />
    </Box>
  );
};

export default ImageSlideshow;
