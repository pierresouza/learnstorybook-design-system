import React from "react";
import PropTypes from "prop-types";
import { Button } from "zanthus-components";

interface ButtonTestProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "filled" | "outline" | "text";
  action?: "button" | "link";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  to?: string;
  disabled?: boolean;
  size?: "sm" | "lg";
}

export function ButtonTest({ children, onClick, className, type, action, icon, iconPosition, to, disabled, size }: ButtonTestProps) {
  return <Button children={children} onClick={onClick} className={className} type={type} action={action} icon={icon} iconPosition={iconPosition} to={to} disabled={disabled} size={size} />;
}

ButtonTest.propTypes = {
  /** Texto padrão do botão */
  children: PropTypes.node.isRequired,
  /** Função de clique que executa uma função */
  onClick: PropTypes.func,
  /** Classe CSS personalizada  */
  className: PropTypes.string,
  /** Tipos de botão suportados */
  type: PropTypes.oneOf(["filled", "outlined", "text"]),
  /** Define se é um botão ou link */
  action: PropTypes.oneOf(["button", "link"]),
  /** Posição do ícone (esquerda ou direita) */
  iconPosition: PropTypes.oneOf(["left", "right"]),
  /** URL para links */
  to: PropTypes.string,
  /** Define se o botão está desabilitado */
  disabled: PropTypes.bool,
  /** Tamanhos suportados */
  size: PropTypes.oneOf(["sm", "lg"]),
};

ButtonTest.defaultProps = {
  children: "Button",
  onClick: () => void 0,
  className: "btn-custom",
  type: "filled",
  action: "button",
  iconPosition: "left",
  to: "#",
  disabled: false,
  size: "lg",
};
