import React, {ComponentProps} from "react";
import {Story, Meta} from "@storybook/react";
import Footer from "./Footer";

export default {
  component: Footer,
  title: "Components/Footer",
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

export const Template: Story<ComponentProps<typeof Footer>> = (args) => (
  <Footer {...args} />
);

Template.storyName = "Footer";
