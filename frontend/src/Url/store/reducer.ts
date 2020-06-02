import {
  SEND_URL,
  DELETE_URL,
  MY_URLS,
  URLState,
  URLActionType,
  NEW_URL,
} from "./actionTypes";

const initialURLState: URLState = {
  urls: [],
  shortUrl: {
    url: "",
    customUrl: "",
    expiresOn: "",
    _id: "",
  },
  isNewUrlCreated: false,
};

export function urlReducer(
  state = initialURLState,
  action: URLActionType
): URLState {
  switch (action.type) {
    case SEND_URL:
      return {
        shortUrl: { ...action.payload.newUrl },
        urls: [...state.urls, action.payload.newUrl],
        isNewUrlCreated: action.payload.isNewUrlCreated,
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
          customUrl: newUrl.customUrl,
        };
      });
      return { ...state, urls: [...urls] };
    case NEW_URL:
      return {
        ...state,
        shortUrl: {
          url: "",
          customUrl: "",
          expiresOn: "",
          _id: "",
        },
        isNewUrlCreated: action.payload,
      };
    default:
      return state;
  }
}
