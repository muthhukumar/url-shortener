import React from "react";

import "./Button.css";

interface ButtonProps {
  classes?: "shorturl-btn" | "close-btn" | "myurl-btn" | "logout-btn";
  children: string;
  onClick?: any;
  disabled: boolean;
  type?: "submit";
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button
      onClick={props.onClick}
      disabled={props.disabled}
      className={`btn ${props.classes}`}
      type={props.type}
    >
      {props.children}
    </button>
  );
};

export default Button;
