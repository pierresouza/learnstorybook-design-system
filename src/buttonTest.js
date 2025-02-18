import React from "react";
import PropTypes from "prop-types";
import { Button } from "joao-component-library";

export function ButtonTest({ children, onClick, className, type, action, icon, iconPosition, to, disabled, size }) {
  return <Button children={children} onClick={onClick} className={className} type={type} action={action} icon={icon} iconPosition={iconPosition} to={to} disabled={disabled} size={size} />;
}

ButtonTest.propTypes = {
  children: PropTypes.node.isRequired, // Aceita qualquer tipo de conteúdo (string, elementos, etc.)
  onClick: PropTypes.func, // Função de clique (opcional)
  className: PropTypes.string, // Classe CSS personalizada (opcional)
  type: PropTypes.oneOf(["filled", "outlined", "text"]), // Tipos de botão suportados
  action: PropTypes.oneOf(["button", "link"]), // Define se é um botão ou link
  icon: PropTypes.element, // Ícone a ser exibido (opcional)
  iconPosition: PropTypes.oneOf(["left", "right"]), // Posição do ícone (esquerda ou direita)
  to: PropTypes.string, // URL para links (opcional)
  disabled: PropTypes.bool, // Define se o botão está desabilitado
  size: PropTypes.oneOf(["sm", "md", "lg"]), // Tamanhos suportados
};

ButtonTest.defaultProps = {
  children: "Button", // Texto padrão do botão
  onClick: () => alert("Action"), // Ação padrão ao clicar
  className: "btn-default", // Classe CSS padrão
  type: "filled", // Tipo padrão do botão
  action: "button", // Ação padrão (botão)
  icon: null, // Sem ícone por padrão
  iconPosition: "left", // Posição padrão do ícone
  to: null, // Sem URL por padrão
  disabled: false, // Botão habilitado por padrão
  size: "lg", // Tamanho padrão
};

ButtonTest.displayName = "ButtonTest";
