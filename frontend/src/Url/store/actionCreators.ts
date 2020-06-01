import {
  SEND_URL,
  DELETE_URL,
  MY_URLS,
  URLActionType,
  REDIRECT,
  URL,
  ID,
  NEW_URL,
} from "./actionTypes";

export function sendUrl(newUrl: URL): URLActionType {
  return {
    type: SEND_URL,
    payload: { newUrl, isNewUrlCreated: true },
  };
}

export function myUrls(urls: URL[]): URLActionType {
  return {
    type: MY_URLS,
    payload: urls,
  };
}

export function deleteUrl(id: ID): URLActionType {
  return {
    type: DELETE_URL,
    payload: id,
  };
}

export function redirectUrl(): URLActionType {
  return {
    type: REDIRECT,
  };
}

export function createNewUrl(): URLActionType {
  return {
    type: NEW_URL,
    payload: false,
  };
}
