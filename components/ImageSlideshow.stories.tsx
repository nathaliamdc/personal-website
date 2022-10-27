import React, {ComponentProps} from "react";
import {Story, Meta} from "@storybook/react";
import ImageSlideshow from "./ImageSlideshow";

export default {
  component: ImageSlideshow,
  title: "Components/ImageSlideshow",
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

const imagePaths = [
  "/research1.jpg",
  "/research2.jpg",
  "/research3.jpg",
  "/research4.jpg",
  "/research5.jpg",
  "/research6.jpg",
  "/research7.jpg",
  "/research8.jpg",
];

export const Template: Story<ComponentProps<typeof ImageSlideshow>> = (
  args
) => <ImageSlideshow {...args} srcList={imagePaths} />;

Template.storyName = "ImageSlideshow";
