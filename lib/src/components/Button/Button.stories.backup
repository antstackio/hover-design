// Button.stories.ts|tsx

import React from "react";

import { ComponentStory, Meta } from "@storybook/react";

import { Button } from "./Button";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    variant: {
      description: "Button Variant",
      name: "Variant",
      defaultValue: "default",
      control: {
        type: "select",
        options: ["default", "light", "ghost", "hallow"],
      },
    },
    children: {
      defaultValue: "Button",
      description: "HTML Child of button",
      name: "Label",
      type: "string",
    },
    fontSize: {
      description: "Font Size",
      name: "Font Size",
      defaultValue: "small",
      control: {
        type: "select",
        options: ["small", "medium", "large"],
      },
    },
    padding: {
      description: "Button Padding",
      name: "Padding",
      defaultValue: "small",
      control: {
        type: "select",
        options: ["default", "small", "medium", "large"],
      },
    },
    margin: {
      description: "Button Margin",
      name: "Margin",
      defaultValue: "small",
      control: {
        type: "select",
        options: ["default", "small", "medium", "large"],
      },
    },
    isBlock: {
      description: "Button Block",
      name: "Block",
      defaultValue: true,
      control: {
        type: "select",
        options: [true, false],
      },
    },
  },
} as Meta;

const Template: ComponentStory<typeof Button> = (args) => <div>Hi!</div>;

export const Primary = Template.bind({});

Primary.args = {};
