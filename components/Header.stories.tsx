import React, {ComponentProps} from "react";
import {Story, Meta} from "@storybook/react";
import Header from "./Header";

export default {
  component: Header,
  title: "Components/Header",
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

export const Template: Story<ComponentProps<typeof Header>> = (args) => (
  <Header {...args} />
);

Template.storyName = "Header";
