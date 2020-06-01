import React from "react";

import MyUrl from "../../MyURLs/MyURL/MyURL";
import { useSelector } from "react-redux";
import { RootState } from "../../../shared/store/index";
import Card from "../../../shared/components/UIElements/Card/Card";

const NewShortUrl: React.FC = () => {
  const newShortUrl = useSelector((state: RootState) => {
    return state.url.shortUrl;
  });
  return (
    <Card classes="home-card">
      <MyUrl
        action="NEW"
        url={newShortUrl.url}
        expiresIn={newShortUrl.expiresOn}
        shortUrl={newShortUrl.shortenedUrl}
        id={newShortUrl._id}
      />
    </Card>
  );
};

export default NewShortUrl;
