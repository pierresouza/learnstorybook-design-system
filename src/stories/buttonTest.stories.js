import React from "react";
import { action } from "@storybook/addon-actions"; // For Storybook action logging

import { ButtonTest } from "./buttonTest"; // Assuming ButtonTest is the button component to test

// WrapperButton component for demonstration
function WrapperButton(props) {
  return (
    <>
      <ButtonTest onClick={action("Click")} value={"Teste"} {...props} />
    </>
  );
}

// Storybook default export
export default {
  title: "Design System|ButtonTest", // Story title
  component: ButtonTest, // Corrected to ButtonTest
  tags: ["autodocs"], // Story tags
};

// A default story for WrapperButton
export const WrapperButtonStory = () => <WrapperButton />;
WrapperButtonStory.story = {
  name: "Wrapper button",
};
