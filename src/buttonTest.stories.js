import React from "react";
import { action } from "@storybook/addon-actions";
import { ButtonTest } from "./buttonTest";

export default {
  title: "ButtonTest",
  component: ButtonTest,
  tags: ["autodocs"],
  argTypes: {
    className: {
      options: ["btn-primary", "btn-secondary"],
      control: { type: "radio" },
    },
    value: {
      control: { type: "text" },
    },
  },
};

const Template = (args) => <ButtonTest {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: "Button",
  onClick: action("action"),
  className: "btn-default",
};

export const Primary = Template.bind({});
Primary.args = {
  value: "Button",
  onClick: action("action"),
  className: "btn-primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  value: "Button",
  onClick: action("action"),
  className: "btn-secondary",
};
