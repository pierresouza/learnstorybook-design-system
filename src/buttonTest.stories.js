import React from "react";
import { action } from "@storybook/addon-actions";
import { ButtonTest } from "./buttonTest";

export default {
  title: "Button",
  component: ButtonTest,
  argTypes: {
    className: {
      options: ["btn-default", "btn-primary", "btn-secondary", "btn-custom"],
      control: { type: "select" },
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

export const Custom = {
  args: {
    value: "Button",
    onClick: action("action"),
    className: "btn-custom",
  },
};
