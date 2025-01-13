import React from "react";
import PropTypes from "prop-types";
import { Button } from "joao-component-library";

export function ButtonTest({ value, onClick, className }) {
  return <Button value={value} onClick={onClick} className={className} />;
}

ButtonTest.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

ButtonTest.defaultProps = {
  value: "Button",
  onClick: () => alert("Action"),
  className: "btn-primary",
};

ButtonTest.displayName = "ButtonTest";
