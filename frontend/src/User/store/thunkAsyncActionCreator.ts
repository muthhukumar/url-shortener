import {Action} from "redux";
import {ThunkAction} from "redux-thunk";

import {RootState} from "../../shared/store/index";
import {loginAction, signupAction} from "./actionCreators";
import {getData} from "../../shared/Util/getData";
import {myUrls, createNewUrl} from "../../Url/store/actionCreators";
import {logoutAction} from "./actionCreators";
import {
   stopLoading,
   userAleadyExist,
   logout
} from "../../shared/store/actionCreators";
import {
   loginSuccessful,
   loginFailed,
   signupFailed,
   signupSuccessful,
} from "../../shared/store/actionCreators";

interface Credentials {
   email: string;
   password: string;
   name?: string;
}

export const thunkLogin = (
   credentials: Credentials
): ThunkAction<void, RootState, unknown, Action<string>> => async (
   dispatch
) => {
      let response;
      try {
         response = await getData("post", credentials, "user/login", null);
         dispatch(loginAction(response.data.token));
         dispatch(loginSuccessful());
      } catch (err) {
         dispatch(loginFailed());
      }
      dispatch(stopLoading());
   };

export const thunkSignup = (
   credentials: Credentials
): ThunkAction<void, RootState, unknown, Action<string>> => async (
   dispatch
) => {
      let response;
      try {
         response = await getData("post", credentials, "user/signup", null);
         dispatch(signupAction(response.data.token));
         dispatch(signupSuccessful());
      } catch (err) {
         if (response.status === 409) return dispatch(userAleadyExist());
         dispatch(signupFailed());
      }
      dispatch(stopLoading());
   };

export const thunkAutoLogin = (): ThunkAction<
   void,
   RootState,
   unknown,
   Action<string>
> => async (dispatch) => {
   let response;
   try {
      response = await (await fetch("http://localhost:5000/user/refresh_token", {
         method: "get",
         credentials: "include",
      })).json();
      dispatch(loginAction(response.token));
   } catch (err) {
   }
};


export const thunkLogout = (): ThunkAction<
   void,
   RootState,
   unknown,
   Action
> => async (dispatch) => {
   try {
      await getData("get", null, "user/logout", null)
      dispatch(logoutAction());
      dispatch(createNewUrl());
      dispatch(logout());
      dispatch(myUrls([]));
   } catch (err) {
   }

}
