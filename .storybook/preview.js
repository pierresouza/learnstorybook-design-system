import React from "react";
import { GlobalStyle } from "../src/shared/global";

export const decorators = [
  (Story) => (
    <>
      <GlobalStyle />
      <Story />
    </>
  ),
];

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" }, // Captura eventos que começam com "on"
};

export default preview;
