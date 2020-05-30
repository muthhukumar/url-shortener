import { ThunkAction } from "redux-thunk";
import { Action } from "redux";

import { RootState } from "../../shared/store/index";
import { myUrls } from "./actionCreators";
import { getData } from "../../shared/Util/getData";

export const thunkMyURLs: (
  token: string
) => ThunkAction<void, RootState, unknown, Action<string>> = (token) => async (
  dispatch
) => {
  const response = await getData("get", null, "url/myurls", token);
  console.log(response);
  //   dispatch(myUrls());
};
