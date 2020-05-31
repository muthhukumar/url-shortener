import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../../shared/store/index";
import { loginAction, signupAction } from "./actionCreators";
import { getData } from "../../shared/Util/getData";
import { stopLoading } from "../../shared/store/actionCreators";

interface Credentials {
  email: string;
  password: string;
  name?: string;
}

export const thunkLogin = (
  credentials: Credentials
): ThunkAction<void, RootState, unknown, Action<string>> => async (
  dispatch
) => {
  let response;
  try {
    response = await getData("post", credentials, "user/login", null);
  } catch (err) {
    throw err;
  }
  dispatch(loginAction(response.token));
  dispatch(stopLoading());
};

export const thunkSignup = (
  credentials: Credentials
): ThunkAction<void, RootState, unknown, Action<string>> => async (
  dispatch
) => {
  let response;
  try {
    response = await getData("post", credentials, "user/signup", null);
  } catch (err) {
    throw err;
  }
  dispatch(signupAction(response.token));
  dispatch(stopLoading());
};
