import React from "react";
import { ButtonTest } from "./buttonTest"; // Importe o componente atualizado
import { action } from "@storybook/addon-actions";

export default {
  title: "Components/ButtonTest", // Nome da categoria no Storybook
  component: ButtonTest, // Componente principal
  argTypes: {
    children: {
      control: { type: "text" },
    },
    type: {
      control: { type: "select" },
      options: ["filled", "outlined", "text"], // Tipos de botão suportados
    },
    size: {
      control: { type: "select" },
      options: ["sm", "lg"], // Tamanhos suportados
    },
    iconPosition: {
      control: { type: "select" },
      options: ["left", "right"], // Posições do ícone
    },
    action: {
      control: { type: "select" },
      options: ["button", "link"], // Ação (botão ou link)
    },
    disabled: {
      options: ["boolean"], // Estado desabilitado
    },
  },
};

const Template = (args) => <ButtonTest {...args} />;

// Exemplo padrão
export const Default = Template.bind({});
Default.args = {
  children: "Default Button",
  onClick: action("clicked"), // Registra cliques no Storybook
  type: "filled",
  size: "lg",
};

Default.parameters = {
  docs: {
    source: {
      code: "Your code snippet goes here.",
      language: "jsx",
      type: "auto",
    },
  },
};

// Botão com ícone à esquerda
export const WithIcon = Template.bind({});
WithIcon.args = {
  children: "Button with Icon",
  icon: <span>⭐</span>, // Ícone de exemplo
  iconPosition: "left",
  type: "filled",
  size: "lg",
};

// Botão desabilitado
export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  children: "Disabled Button",
  type: "filled",
  size: "lg",
};

// Botão como link
export const AsLink = Template.bind({});
AsLink.args = {
  children: "Link Button",
  action: "link",
  to: "#", // URL de exemplo
  type: "filled",
  size: "lg",
};

// Botão pequeno
export const SmallSize = Template.bind({});
SmallSize.args = {
  children: "Small Button",
  type: "filled",
  size: "sm",
};

// Botão grande
export const LargeSize = Template.bind({});
LargeSize.args = {
  children: "Large Button",
  type: "filled",
  size: "lg",
};
