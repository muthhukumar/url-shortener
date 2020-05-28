import React from "react";

import "./Card.css";

interface CardProps {
  children: React.ReactNode;
  classes: "home-card" | "myurl";
}

const Card: React.FC<CardProps> = (props) => (
  <div className={`card ${props.classes}`}>{props.children}</div>
);

export default Card;
