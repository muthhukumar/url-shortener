import { LOGIN, SIGNUP, userActionType, token } from "./actionTypes";

export function loginAction(token: token): userActionType {
  return {
    type: LOGIN,
    payload: token,
  };
}

export function signupAction(token: token): userActionType {
  return {
    type: SIGNUP,
    payload: token,
  };
}
