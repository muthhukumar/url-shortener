import {
  SEND_URL,
  DELETE_URL,
  MY_URLS,
  URLState,
  URLActionType,
} from "./actionTypes";

const initialURLState: URLState = {
  urls: [
    // {
    //   url: "www.google.com../../shared/components/UIElements/Title/Title",
    //   expiresIn: 2,
    //   shortUrl: "ggl",
    //   id: "1",
    // },
    // {
    //   url: "www.google.com",
    //   expiresIn: 2,
    //   id: "2",
    //   shortUrl: "ggl",
    // },
  ],
};

export function urlReducer(
  state = initialURLState,
  action: URLActionType
): URLState {
  switch (action.type) {
    case SEND_URL:
      return { urls: [...state.urls, action.payload] };
    case DELETE_URL:
      return { urls: state.urls.filter((url) => url.id !== action.payload) };
    case MY_URLS:
      return { urls: [...state.urls, ...action.payload] };
    default:
      return state;
  }
}
