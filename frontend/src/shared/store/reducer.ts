import {
  UIState,
  LOADING,
  NOTIFICATION_MESSAGE,
  CLOSE_NOTIFICATION,
  NotificationClosing,
  NotificationMessage,
  Loading,
} from "./actionTypes";

const initialState: UIState = {
  isLoading: false,
  errorMessage: "",
  isNotificationOpen: false,
  notificationType: "info",
};

export function UIReducer(
  state: UIState = initialState,
  action: NotificationClosing | NotificationMessage | Loading
): UIState {
  switch (action.type) {
    case LOADING:
      return { ...state, isLoading: action.payload };
    case NOTIFICATION_MESSAGE:
      return {
        ...state,
        errorMessage: action.payload.message,
        isNotificationOpen: action.payload.isNotificationOpen,
        notificationType: action.payload.notificationType,
      };
    case CLOSE_NOTIFICATION:
      return {
        ...state,
        errorMessage: "",
        isNotificationOpen: action.payload,
      };
    default:
      return state;
  }
}
