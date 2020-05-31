import { urlReducer } from "../../Url/store/reducer";
import { userReducer } from "../../User/store/reducer";
import { combineReducers } from "redux";
import { UIReducer } from "./reducer";

const RootReducer = combineReducers({
  url: urlReducer,
  user: userReducer,
  ui: UIReducer,
});

export default RootReducer;

export type RootState = ReturnType<typeof RootReducer>;
