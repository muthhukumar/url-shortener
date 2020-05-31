import React from "react";
import { Link } from "react-router-dom";

import Card from "../shared/components/UIElements/Card/Card";
import "./Redirect.css";

interface Props {
  match: any;
}

type ErrMessage = "PAGE NOT FOUND" | "LINK EXPIRED";

const RedirectUrl: React.FC<Props> = (props) => {
  const { expired } = props.match.params;
  console.log(expired);
  const errMessage: ErrMessage =
    expired !== "expired" ? "PAGE NOT FOUND" : "LINK EXPIRED";
  return (
    <Card classes="home-card">
      <div className="redirect-wrapper">
        <h4>{errMessage}</h4>
        <Link to="/home">GO TO HOME</Link>
      </div>
    </Card>
  );
};

export default RedirectUrl;
