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

export const Default = {
  args: {
    value: "Button",
    onClick: action("action"),
    className: "btn-default",
  },
};

export const Primary = {
  args: {
    value: "Button",
    onClick: action("action"),
    className: "btn-primary",
  },
};

export const Secondary = {
  args: {
    value: "Button",
    onClick: action("action"),
    className: "btn-secondary",
  },
};
