import React, {ComponentProps} from "react";
import {Story, Meta} from "@storybook/react";
import SoftwareProject from "./SoftwareProject";
import {listSoftwareProjects} from "../content/projects";

export default {
  component: SoftwareProject,
  title: "Components/SoftwareProject",
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

const projects = listSoftwareProjects();

export const Template: Story<ComponentProps<typeof SoftwareProject>> = (
  args
) => <SoftwareProject {...args} project={projects[0]} />;

Template.storyName = "SoftwareProject";
