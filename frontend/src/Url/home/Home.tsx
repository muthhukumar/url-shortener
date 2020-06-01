import React from "react";
import { useSelector } from "react-redux";

import ShortUrl from "./shortUrl/ShortUrl";
import NewShortUrl from "./shortUrl/NewShortUrl";
import { RootState } from "../../shared/store/index";

const Home = () => {
  const isNewUrlCreated = useSelector((state: RootState) => {
    return state.url.isNewUrlCreated;
  });
  return !isNewUrlCreated ? <ShortUrl /> : <NewShortUrl />;
};

export default Home;
