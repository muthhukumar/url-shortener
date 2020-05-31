import {
  ErrorMessageAction,
  LoadingAction,
  SET_LOADING_FALSE,
  SET_LOADING_TRUE,
  USER_NOT_FOUND,
  USER_ALREADY_EXIST,
  USER_LOGIN_SUCCESSFUL,
  USER_LOGIN_FAILED,
  URL_ALREADY_EXIST,
  URL_CREATION_FAILED,
  FETCH_URL_FAILED,
  CLOSE_NOTIFICATION,
  UIState,
  NotificationAction,
} from "./actionTypes";

const initialState: UIState = {
  isLoading: false,
  errorMessage: "",
  isNotificationOpen: true,
};

export function UIReducer(
  state: UIState = initialState,
  action: ErrorMessageAction | LoadingAction | NotificationAction
): UIState {
  switch (action.type) {
    case SET_LOADING_TRUE:
      return { ...state, isLoading: action.payload };
    case SET_LOADING_FALSE:
      return { ...state, isLoading: action.payload };
    case USER_NOT_FOUND:
      return {
        errorMessage: action.payload.message,
        isNotificationOpen: action.payload.isNotificationOpen,
        ...state,
      };
    case USER_ALREADY_EXIST:
      return {
        errorMessage: action.payload.message,
        isNotificationOpen: action.payload.isNotificationOpen,
        ...state,
      };
    case USER_LOGIN_SUCCESSFUL:
      return {
        errorMessage: action.payload.message,
        isNotificationOpen: action.payload.isNotificationOpen,
        ...state,
      };
    case USER_LOGIN_FAILED:
      return {
        errorMessage: action.payload.message,
        isNotificationOpen: action.payload.isNotificationOpen,
        ...state,
      };
    case URL_ALREADY_EXIST:
      return {
        errorMessage: action.payload.message,
        isNotificationOpen: action.payload.isNotificationOpen,
        ...state,
      };
    case URL_CREATION_FAILED:
      return {
        errorMessage: action.payload.message,
        isNotificationOpen: action.payload.isNotificationOpen,
        ...state,
      };
    case FETCH_URL_FAILED:
      return {
        errorMessage: action.payload.message,
        isNotificationOpen: action.payload.isNotificationOpen,
        ...state,
      };
    case CLOSE_NOTIFICATION:
      return {
        ...state,
        isNotificationOpen: action.payload,
      };
    default:
      return state;
  }
}
