import React from "react";
import { useSelector } from "react-redux";

import "./MyURLs.css";
import Title from "../../shared/components/UIElements/Title/Title";
import Card from "../../shared/components/UIElements/Card/Card";
import MyURL from "./MyURL/MyURL";
import { RootState } from "../../shared/store/index";

const MyURLs: React.FC = () => {
  const url = useSelector((state: RootState) => {
    return state.url;
  });

  return (
    <Card classes="home-card">
      <Title classes="home-title">MyURLs</Title>
      <div className="myurls-wrapper">
        {url.urls.map((url) => (
          <MyURL
            key={url.id}
            url={url.url}
            id={url.id}
            expiresIn={url.expiresIn}
            shortUrl={url.shortUrl}
          />
        ))}
      </div>
    </Card>
  );
};

export default MyURLs;
