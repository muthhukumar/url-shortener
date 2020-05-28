import React from "react";

import "./MyURLs.css";
import Title from "../../shared/components/UIElements/Title/Title";
import Card from "../../shared/components/UIElements/Card/Card";
import MyURL from "./MyURL/MyURL";

const myurls = [
  {
    url: "www.google.com",
    expiresIn: 2,
    shortUrl: "ggl",
    id: "1",
  },
  {
    url: "www.google.com",
    expiresIn: 2,
    id: "2",
    shortUrl: "ggl",
  },
];

const MyURLs: React.FC = () => {
  return (
    <Card classes="home-card">
      <Title classes="main-header__title">MyURLs</Title>
      <div className="myurls-wrapper">
        {myurls.map((url) => (
          <MyURL
            key={url.id}
            url={url.url}
            expiresIn={url.expiresIn}
            shortUrl={url.shortUrl}
          />
        ))}
      </div>
    </Card>
  );
};

export default MyURLs;
