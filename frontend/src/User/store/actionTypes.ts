export type token = string;

export interface userState {
  token: token;
}

export const LOGIN = "LOGIN";
export const SIGNUP = "SIGNUP";

export interface loginAction {
  type: typeof LOGIN;
  payload: token;
}

export interface signupAction {
  type: typeof SIGNUP;
  payload: token;
}

export type userActionType = loginAction | signupAction;
