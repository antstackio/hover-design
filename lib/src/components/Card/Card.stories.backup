import { ComponentStory, Meta } from "@storybook/react";

import { Card } from "./Card";

export default {
  title: "Card",
  component: Card,
  argTypes: {
    variant: {
      description: "Card Variant",
      name: "Variant",
      defaultValue: "plain",
      control: {
        type: "select",
        options: ["plain", "outline", "shadow", "solid"],
      },
    },
    children: {
      defaultValue: "Card Content",
      description: "HTML Child of card",
      name: "Content",
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
      description: "Card Padding",
      name: "Padding",
      defaultValue: "small",
      control: {
        type: "select",
        options: ["default", "small", "medium", "large"],
      },
    },
    margin: {
      description: "Card Margin",
      name: "Margin",
      defaultValue: "small",
      control: {
        type: "select",
        options: ["default", "small", "medium", "large"],
      },
    },
  },
};

const Template: ComponentStory<typeof Card> = (args) => <div>Hi</div>;

export const Primary = Template.bind({});

Primary.args = {};
