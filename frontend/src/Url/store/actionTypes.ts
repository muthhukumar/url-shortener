export type ID = string;

export interface URL {
  url: string;
  shortUrl: string;
  expiresIn: number;
  id: ID;
}

export interface URLState {
  urls: URL[];
}

export const SEND_URL = "SEND_URL";
export const MY_URLS = "MY_URLS";
export const DELETE_URL = "DELETE_URL";
export const REDIRECT = "REDIRECT";

interface redirectAction {
  type: typeof REDIRECT;
}

interface sendURLAction {
  type: typeof SEND_URL;
  payload: URL;
}

interface myURLsAction {
  type: typeof MY_URLS;
  payload: URL[];
}

interface deleteURLAction {
  type: typeof DELETE_URL;
  payload: ID;
}

export type URLActionType =
  | sendURLAction
  | deleteURLAction
  | myURLsAction
  | redirectAction;
