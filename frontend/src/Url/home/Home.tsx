import React from "react";
import { useDispatch, useSelector } from "react-redux";

import ShortUrl from "./shortUrl/ShortUrl";
import NewShortUrl from "./shortUrl/NewShortUrl";
import { RootState } from "../../shared/store/index";

const Home = () => {
  const url = useSelector((state: RootState) => {
    return state.url.shortUrl;
  });
  return url.url === "" ? <ShortUrl /> : <NewShortUrl />;
};

export default Home;
