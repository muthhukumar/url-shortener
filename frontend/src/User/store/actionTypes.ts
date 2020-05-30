export type token = string;

export interface userState {
  token: token;
}

export const LOGIN = "LOGIN";
export const SIGNUP = "SIGNUP";
export const LOGOUT = "LOGOUT";

export interface loginAction {
  type: typeof LOGIN;
  payload: token;
}

export interface signupAction {
  type: typeof SIGNUP;
  payload: token;
}

export interface logoutAction {
  type: typeof LOGOUT;
}

export type userActionType = loginAction | signupAction | logoutAction;
