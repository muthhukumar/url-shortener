import { LOGIN, SIGNUP, userActionType, userState } from "./actionTypes";

const initialState: userState = {
  token: "",
};

export function userReducer(
  state: userState = initialState,
  action: userActionType
): userState {
  switch (action.type) {
    case LOGIN:
      return { token: action.payload };
    case SIGNUP:
      return { token: action.payload };
    default:
      return state;
  }
}
