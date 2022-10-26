import React, {ComponentProps} from "react";
import {Story, Meta} from "@storybook/react";
import CareerPosition from "./CareerPosition";
import {listCareerPositions} from "../content/education";

export default {
  component: CareerPosition,
  title: "Components/CareerPosition",
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

const positions = listCareerPositions();

export const Template: Story<ComponentProps<typeof CareerPosition>> = (
  args
) => <CareerPosition {...args} position={positions[0]} />;

Template.storyName = "CareerPosition";
