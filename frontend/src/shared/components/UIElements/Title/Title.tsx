import React from "react";

import "./Title.css";

interface TitleHeader {
  children: string;
  classes?: "main-header__title" | "home-title";
}

const Title: React.FC<TitleHeader> = (props) => (
  <div className={`title ${props.classes}`}>{props.children}</div>
);

export default Title;
