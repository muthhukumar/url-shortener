export const SET_LOADING_TRUE = "SET_LOADING_TRUE";
export const SET_LOADING_FALSE = "SET_LOADING_FALSE";
export const SET_ERROR_TRUE = "SET_ERROR_TRUE";
export const SET_ERROR_FALSE = "SET_ERROR_FALSE";

export const USER_NOT_FOUND = "USER NOT FOUND";
export const USER_ALREADY_EXIST = "USER ALREADY EXIST";
export const USER_LOGIN_SUCCESSFUL = "LOGIN SUCCESSFUL";
export const USER_LOGIN_FAILED = "LOGIN FAILED";

export const URL_CREATION_FAILED = "CREATING SHORTENED URL FAILED";
export const URL_ALREADY_EXIST = "URL_ALREADY_EXIST";
export const FETCH_URL_FAILED = "FETCH_URL_FAILED";

export const CLOSE_NOTIFICATION = "CLOSE_NOTIFICATION";

export interface UIState {
  isLoading: boolean;
  errorMessage: string;
  isNotificationOpen: boolean;
}

interface LOADING_ACTION {
  type: string;
  payload: boolean;
}

interface ERROR_MESSAGE_ACTION {
  type: string;
  payload: {
    message: string;
    isNotificationOpen: boolean;
  };
}

interface setCloseNotification extends LOADING_ACTION {
  type: typeof CLOSE_NOTIFICATION;
  payload: false;
}

interface setLoadingTrueAction extends LOADING_ACTION {
  type: typeof SET_LOADING_TRUE;
  payload: true;
}

interface setLoadingFalseAction extends LOADING_ACTION {
  type: typeof SET_LOADING_FALSE;
  payload: false;
}

interface userNotFoundAction extends ERROR_MESSAGE_ACTION {
  type: typeof USER_NOT_FOUND;
  payload: {
    message: string;
    isNotificationOpen: true;
  };
}

interface userAlreadyExistAction extends ERROR_MESSAGE_ACTION {
  type: typeof USER_ALREADY_EXIST;
  payload: {
    message: string;
    isNotificationOpen: true;
  };
}

interface userLoginSuccessfulAction extends ERROR_MESSAGE_ACTION {
  type: typeof USER_LOGIN_SUCCESSFUL;
  payload: {
    message: string;
    isNotificationOpen: true;
  };
}

interface userLoginFailedAction extends ERROR_MESSAGE_ACTION {
  type: typeof USER_LOGIN_FAILED;
  payload: {
    message: string;
    isNotificationOpen: true;
  };
}

interface urlCreationFailedAction extends ERROR_MESSAGE_ACTION {
  type: typeof URL_CREATION_FAILED;
  payload: {
    message: string;
    isNotificationOpen: true;
  };
}

interface urlAlreadExistAction extends ERROR_MESSAGE_ACTION {
  type: typeof URL_ALREADY_EXIST;
  payload: {
    message: string;
    isNotificationOpen: true;
  };
}

interface fetchUrlFailedAction extends ERROR_MESSAGE_ACTION {
  type: typeof FETCH_URL_FAILED;
  payload: {
    message: string;
    isNotificationOpen: true;
  };
}

export type LoadingAction = setLoadingTrueAction | setLoadingFalseAction;
export type ErrorMessageAction =
  | userNotFoundAction
  | userAlreadyExistAction
  | userLoginFailedAction
  | userLoginSuccessfulAction
  | urlCreationFailedAction
  | urlAlreadExistAction
  | fetchUrlFailedAction;

export type NotificationAction = setCloseNotification;
