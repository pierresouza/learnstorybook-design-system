import React from "react";
import { action } from "@storybook/addon-actions";

import { ButtonTest } from "./buttonTest";

function WrapperButton(props) {
  return (
    <>
      <ButtonTest onClick={action("Click")} value={"Teste"} {...props} />
    </>
  );
}

export default {
  title: "Design System|ButtonTest",
  component: ButtonTest,
  tags: ["autodocs"],
};

export const WrapperButtonStory = () => <WrapperButton />;
WrapperButtonStory.story = {
  name: "Wrapper button",
};
