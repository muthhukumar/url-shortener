export const USER_NOT_FOUND = "USER NOT FOUND";
export const USER_ALREADY_EXIST = "USER ALREADY EXIST";
export const USER_LOGIN_SUCCESSFUL = "LOGIN SUCCESSFUL";
export const USER_LOGIN_FAILED = "LOGIN FAILED";
export const USER_LOGOUT = "LOGGED OUT";

export const URL_CREATION_FAILED = "CREATING SHORTENED URL FAILED";
export const URL_ALREADY_EXIST = "URL ALREADY EXIST";
export const FETCH_URL_FAILED = "FETCH URL FAILED";
export const DELETE_URL_FAILED = "DELETE URL FAILED";
export const URL_DELETED = "URL DELETED";
export const URL_CREATED = "URL CREATED";

export const CLOSE_NOTIFICATION = "CLOSE_NOTIFICATION";
export const LOADING = "LOADING";
export const NOTIFICATION_MESSAGE = "NOTIFICATION_MESSAGE";

export interface UIState {
  isLoading: boolean;
  errorMessage: string;
  isNotificationOpen: boolean;
  notificationType:
    | "error"
    | "success"
    | "info"
    | "warning"
    | "close-animation";
}

interface LOADING_ACTION {
  type: typeof LOADING;
  payload: boolean;
}

interface NOTIFICATION_CLOSING_ACTION {
  type: typeof CLOSE_NOTIFICATION;
  payload: boolean;
}

interface NOTIFICATION_MESSAGE_ACTION {
  type: typeof NOTIFICATION_MESSAGE;
  payload: {
    message: string;
    isNotificationOpen: boolean;
    notificationType:
      | "error"
      | "success"
      | "info"
      | "warning"
      | "close-animation";
  };
}

export type NotificationClosing = NOTIFICATION_CLOSING_ACTION;
export type Loading = LOADING_ACTION;
export type NotificationMessage = NOTIFICATION_MESSAGE_ACTION;
