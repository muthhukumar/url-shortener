import {
  SEND_URL,
  DELETE_URL,
  MY_URLS,
  URLActionType,
  REDIRECT,
  URL,
  ID,
} from "./actionTypes";

export function sendUrl(newUrl: URL): URLActionType {
  return {
    type: SEND_URL,
    payload: newUrl,
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
