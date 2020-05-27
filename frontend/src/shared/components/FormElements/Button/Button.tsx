import React from "react";

import "./Button.css";

interface ButtonProps {
  classes?: "shorturl-btn";
  children: string;
  onClick: any;
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button onClick={props.onClick} className={`btn ${props.classes}`}>
      {props.children}
    </button>
  );
};

export default Button;
