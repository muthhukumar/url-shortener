import { LOGIN, SIGNUP, userActionType, token, LOGOUT } from "./actionTypes";

export function loginAction(accessToken: token): userActionType {
  return {
    type: LOGIN,
    payload: accessToken,
  };
}

export function signupAction(accessToken: token): userActionType {
  return {
    type: SIGNUP,
    payload: accessToken,
  };
}

export function logoutAction(): userActionType {
  return {
    type: LOGOUT,
  };
}
