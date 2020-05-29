import React from "react";

import "./Button.css";

interface ButtonProps {
  classes?: "shorturl-btn" | "close-btn" | "myurl-btn";
  children: string;
  onClick: any;
  disabled: boolean;
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button
      onClick={props.onClick}
      disabled={props.disabled}
      className={`btn ${props.classes}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
