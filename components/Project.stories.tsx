import React, {ComponentProps} from "react";
import {Story, Meta} from "@storybook/react";
import Project from "./Project";
import {listProjects} from "../content/projects";

export default {
  component: Project,
  title: "Components/Project",
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

const projects = listProjects();

export const Template: Story<ComponentProps<typeof Project>> = (args) => (
  <Project {...args} project={projects[0]} />
);

Template.storyName = "Project";
