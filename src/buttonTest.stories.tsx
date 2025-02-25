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
      constrol: { type: "select" },
    },
  },
};

// Exemplo padrão
export const Default = {
  args: {
    children: "Default Button",
    onClick: action("clicked"), // Registra cliques no Storybook
    type: "filled",
    size: "lg",
  },
};

// Botão com ícone à esquerda
export const WithIconLeft = {
  args: {
    children: "Button with Icon",
    icon: <span>⭐</span>, // Ícone de exemplo
    iconPosition: "left",
    type: "filled",
    size: "lg",
  },
};

// Botão com ícone à direita
export const WithIconRight = {
  args: {
    children: "Button with Icon",
    icon: <span>⭐</span>, // Ícone de exemplo
    iconPosition: "right",
    type: "filled",
    size: "lg",
  },
};

// Botão desabilitado
export const Disabled = {
  args: {
    disabled: true,
    children: "Disabled Button",
    type: "filled",
    size: "lg",
  },
};

// Botão como link
export const AsLink = {
  args: {
    children: "Link Button",
    action: "link",
    to: "#", // URL de exemplo
    type: "filled",
    size: "lg",
  },
};

// Botão pequeno
export const SmallSize = {
  args: {
    children: "Small Button",
    type: "filled",
    size: "sm",
  },
};

// Botão grande
export const LargeSize = {
  args: {
    children: "Large Button",
    type: "filled",
    size: "lg",
  },
};

// Botão com tipo "outlined"
export const Outlined = {
  args: {
    children: "Outlined Button",
    type: "outlined",
    size: "lg",
  },
};

// Botão com tipo "text"
export const Text = {
  args: {
    children: "Text Button",
    type: "text",
    size: "lg",
  },
};
