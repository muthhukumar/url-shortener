import { urlReducer } from "../../Url/store/reducer";
import { userReducer } from "../../User/store/reducer";
import { combineReducers } from "redux";

const RootReducer = combineReducers({
  url: urlReducer,
  user: userReducer,
});

export default RootReducer;

export type RootState = ReturnType<typeof RootReducer>;
