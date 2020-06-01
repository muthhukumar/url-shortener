import {
  USER_NOT_FOUND,
  USER_ALREADY_EXIST,
  USER_LOGIN_SUCCESSFUL,
  USER_LOGIN_FAILED,
  URL_ALREADY_EXIST,
  URL_CREATION_FAILED,
  FETCH_URL_FAILED,
  USER_LOGOUT,
  DELETE_URL_FAILED,
  URL_DELETED,
  URL_CREATED,
  CLOSE_NOTIFICATION,
  LOADING,
  NOTIFICATION_MESSAGE,
  Loading,
  NotificationMessage,
  NotificationClosing,
} from "./actionTypes";

export function loading(): Loading {
  return {
    type: LOADING,
    payload: true,
  };
}

export function stopLoading(): Loading {
  return {
    type: LOADING,
    payload: false,
  };
}

export function userNotFound(): NotificationMessage {
  return {
    type: NOTIFICATION_MESSAGE,
    payload: {
      notificationType: "error",
      message: USER_NOT_FOUND,
      isNotificationOpen: true,
    },
  };
}

export function userAleadyExist(): NotificationMessage {
  return {
    type: NOTIFICATION_MESSAGE,
    payload: {
      notificationType: "error",
      message: USER_ALREADY_EXIST,
      isNotificationOpen: true,
    },
  };
}

export function loginSuccessful(): NotificationMessage {
  return {
    type: NOTIFICATION_MESSAGE,
    payload: {
      notificationType: "success",
      message: USER_LOGIN_SUCCESSFUL,
      isNotificationOpen: true,
    },
  };
}

export function loginFailed(): NotificationMessage {
  return {
    type: NOTIFICATION_MESSAGE,
    payload: {
      notificationType: "error",
      message: USER_LOGIN_FAILED,
      isNotificationOpen: true,
    },
  };
}

export function signupSuccessful(): NotificationMessage {
  return {
    type: NOTIFICATION_MESSAGE,
    payload: {
      notificationType: "success",
      message: "SIGNUP SUCCESSFUL",
      isNotificationOpen: true,
    },
  };
}

export function signupFailed(): NotificationMessage {
  return {
    type: NOTIFICATION_MESSAGE,
    payload: {
      notificationType: "error",
      message: "SIGNUP FAILED",
      isNotificationOpen: true,
    },
  };
}

export function urlCreated(): NotificationMessage {
  return {
    type: NOTIFICATION_MESSAGE,
    payload: {
      notificationType: "success",
      message: URL_CREATED,
      isNotificationOpen: true,
    },
  };
}

export function urlAlreadyExist(): NotificationMessage {
  return {
    type: NOTIFICATION_MESSAGE,
    payload: {
      notificationType: "error",
      message: URL_ALREADY_EXIST,
      isNotificationOpen: true,
    },
  };
}

export function urlCreateFailed(): NotificationMessage {
  return {
    type: NOTIFICATION_MESSAGE,
    payload: {
      notificationType: "error",
      message: URL_CREATION_FAILED,
      isNotificationOpen: true,
    },
  };
}

export function urlDeleteFailed(): NotificationMessage {
  return {
    type: NOTIFICATION_MESSAGE,
    payload: {
      notificationType: "error",
      message: DELETE_URL_FAILED,
      isNotificationOpen: true,
    },
  };
}

export function urlDeleted(): NotificationMessage {
  return {
    type: NOTIFICATION_MESSAGE,
    payload: {
      notificationType: "error",
      message: URL_DELETED,
      isNotificationOpen: true,
    },
  };
}

export function urlFetchFailed(): NotificationMessage {
  return {
    type: NOTIFICATION_MESSAGE,
    payload: {
      notificationType: "error",
      message: FETCH_URL_FAILED,
      isNotificationOpen: true,
    },
  };
}

export function closeNotification(): NotificationClosing {
  return {
    type: CLOSE_NOTIFICATION,
    payload: false,
  };
}

export function logout(): NotificationMessage {
  return {
    type: NOTIFICATION_MESSAGE,
    payload: {
      message: USER_LOGOUT,
      notificationType: "success",
      isNotificationOpen: true,
    },
  };
}
