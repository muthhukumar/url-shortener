import { ThunkAction } from "redux-thunk";
import { Action } from "redux";

import { RootState } from "../../shared/store/index";
import { myUrls, deleteUrl } from "../store/actionCreators";
import { getData } from "../../shared/Util/getData";
import { URL } from "../store/actionTypes";
import { stopLoading } from "../../shared/store/actionCreators";

export const thunkMyURLs: (
  token: string
) => ThunkAction<void, RootState, unknown, Action<string>> = (token) => async (
  dispatch
) => {
  let response;
  try {
    response = await getData("get", null, "url/myurls", token);
  } catch (err) {
    throw err;
  }
  console.log(response);
  dispatch(myUrls(response.urlDetails));
};

export const thunkDeleteUrl: (
  shortUrl: string,
  token: string
) => ThunkAction<void, RootState, unknown, Action<string>> = (
  shortUrl,
  token
) => {
  return async (dispatch) => {
    let response;
    try {
      response = await getData("delete", null, "url/" + shortUrl, token);
      console.log(response);
    } catch (err) {
      throw err;
    }
    //try to change
    dispatch(deleteUrl(shortUrl));
  };
};

export const thunkNewURL: (
  newUrl: URL,
  token: string
) => ThunkAction<void, RootState, unknown, Action<string>> = (
  newUrl,
  token
) => async (dispatch) => {
  let response;
  try {
    response = await getData("post", newUrl, "url/shorturl", token);
  } catch (err) {
    throw err;
  }
  dispatch(stopLoading());
  // console.log(response.newUrl);
};
