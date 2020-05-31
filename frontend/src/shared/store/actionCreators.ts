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
  NotificationAction,
} from "./actionTypes";

export function loading(): LoadingAction {
  return {
    type: SET_LOADING_TRUE,
    payload: true,
  };
}

export function stopLoading(): LoadingAction {
  return {
    type: SET_LOADING_FALSE,
    payload: false,
  };
}

export function userNotFound(message: string): ErrorMessageAction {
  return {
    type: USER_NOT_FOUND,
    payload: {
      message,
      isNotificationOpen: true,
    },
  };
}

export function userAleadyExist(message: string): ErrorMessageAction {
  return {
    type: USER_ALREADY_EXIST,
    payload: {
      message,
      isNotificationOpen: true,
    },
  };
}

export function loginSuccessful(message: string): ErrorMessageAction {
  return {
    type: USER_LOGIN_SUCCESSFUL,
    payload: {
      message,
      isNotificationOpen: true,
    },
  };
}

export function loginFailed(message: string): ErrorMessageAction {
  return {
    type: USER_LOGIN_FAILED,
    payload: {
      message,
      isNotificationOpen: true,
    },
  };
}

export function urlAlreadyExist(message: string): ErrorMessageAction {
  return {
    type: URL_ALREADY_EXIST,
    payload: {
      message,
      isNotificationOpen: true,
    },
  };
}

export function urlCreateFailed(message: string): ErrorMessageAction {
  return {
    type: URL_CREATION_FAILED,
    payload: {
      message,
      isNotificationOpen: true,
    },
  };
}

export function urlFetchFailed(message: string): ErrorMessageAction {
  return {
    type: FETCH_URL_FAILED,
    payload: {
      message,
      isNotificationOpen: true,
    },
  };
}

export function closeNotification(): NotificationAction {
  return {
    type: CLOSE_NOTIFICATION,
    payload: false,
  };
}
