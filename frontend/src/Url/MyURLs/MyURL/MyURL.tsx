import React from "react";

import "./MyURL.css";
import Card from "../../../shared/components/UIElements/Card/Card";
import Button from "../../../shared/components/FormElements/Button/Button";

interface Props {
  url: string;
  expiresIn: number;
  shortUrl: string;
}

const MyURL: React.FC<Props> = (props) => {
  return (
    <Card classes="myurl">
      <div className="myurl-wrapper">
        <div>{props.url}</div>
        <div>{props.expiresIn}</div>
        <div>{props.shortUrl}</div>
        <Button onClick={() => {}} classes="shorturl-btn" disabled={false}>
          DELETE
        </Button>
      </div>
    </Card>
  );
};

export default MyURL;
