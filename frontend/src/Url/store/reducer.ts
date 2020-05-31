import {
  SEND_URL,
  DELETE_URL,
  MY_URLS,
  URLState,
  URLActionType,
} from "./actionTypes";

const initialURLState: URLState = {
  urls: [],
  shortUrl: {
    url: "",
    shortenedUrl: "",
    expiresOn: "",
    _id: "",
  },
};

export function urlReducer(
  state = initialURLState,
  action: URLActionType
): URLState {
  switch (action.type) {
    case SEND_URL:
      return {
        shortUrl: { ...action.payload },
        urls: [...state.urls, action.payload],
      };
    case DELETE_URL:
      return {
        ...state,
        urls: state.urls.filter((url) => url._id !== action.payload),
      };
    case MY_URLS:
      const urls = action.payload.map((newUrl) => {
        return {
          url: newUrl.url,
          _id: newUrl._id,
          expiresOn: newUrl.expiresOn ? newUrl.expiresOn.slice(0, 10) : "none",
          shortenedUrl: newUrl.shortenedUrl,
        };
      });
      return { ...state, urls: [...urls] };
    default:
      return state;
  }
}
