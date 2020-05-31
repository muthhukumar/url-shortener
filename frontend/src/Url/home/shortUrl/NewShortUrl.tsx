import React from "react";

import MyUrl from "../../MyURLs/MyURL/MyURL";
import { useSelector } from "react-redux";
import { RootState } from "../../../shared/store/index";

const NewShortUrl: React.FC = () => {
  const newShortUrl = useSelector((state: RootState) => {
    return state.url.shortUrl;
  });
  return (
    <MyUrl
      url={newShortUrl.url}
      expiresIn={newShortUrl.expiresOn}
      shortUrl={newShortUrl.shortenedUrl}
      id={newShortUrl._id}
    />
  );
};

export default NewShortUrl;
