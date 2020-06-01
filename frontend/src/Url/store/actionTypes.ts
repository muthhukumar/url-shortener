export type ID = string;

export interface URL {
  url: string;
  shortenedUrl: string;
  expiresOn: string;
  _id: ID;
}

export interface URLState {
  urls: URL[];
  shortUrl: URL;
  isNewUrlCreated: boolean;
}

export const SEND_URL = "SEND_URL";
export const MY_URLS = "MY_URLS";
export const DELETE_URL = "DELETE_URL";
export const REDIRECT = "REDIRECT";
export const NEW_URL = "NEW_URL";

interface redirectAction {
  type: typeof REDIRECT;
}

interface sendURLAction {
  type: typeof SEND_URL;
  payload: { isNewUrlCreated: true; newUrl: URL };
}

interface myURLsAction {
  type: typeof MY_URLS;
  payload: URL[];
}

interface deleteURLAction {
  type: typeof DELETE_URL;
  payload: ID;
}

interface newUrlAction {
  type: typeof NEW_URL;
  payload: false;
}

export type URLActionType =
  | sendURLAction
  | deleteURLAction
  | myURLsAction
  | redirectAction
  | newUrlAction;
