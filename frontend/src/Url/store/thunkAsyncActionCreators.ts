import {ThunkAction} from "redux-thunk";
import {Action} from "redux";

import {RootState} from "../../shared/store/index";
import {myUrls, deleteUrl, sendUrl} from "../store/actionCreators";
import {getData} from "../../shared/Util/getData";
import {URL} from "../store/actionTypes";
import {
   stopLoading,
   urlFetchFailed,
   urlDeleteFailed,
   urlDeleted,
   urlCreateFailed,
   urlCreated,
} from "../../shared/store/actionCreators";

export const thunkMyURLs: (
   token: string
) => ThunkAction<void, RootState, unknown, Action<string>> = (token) => async (
   dispatch
) => {
   let response;
   try {
      response = await getData("get", null, "url/myurls", token);
      dispatch(myUrls(response.data.urlDetails));
   } catch (err) {
      dispatch(urlFetchFailed());
   }
   dispatch(stopLoading());
};

export const thunkDeleteUrl: (
   shortUrl: string,
   id: string,
   token: string
) => ThunkAction<void, RootState, unknown, Action<string>> = (
   shortUrl,
   id,
   token
) => {
      return async (dispatch) => {
         try {
            await getData("delete", null, "url/" + shortUrl, token);
            dispatch(deleteUrl(id));
            dispatch(urlDeleted());
         } catch (err) {
            dispatch(urlDeleteFailed());
         }
         //try to change
         dispatch(stopLoading());
      };
   };

export const thunkNewURL: (
   newUrl: URL,
   token: string
) => ThunkAction<void, RootState, unknown, Action<string>> = (
   newUrl,
   token
) => async (dispatch) => {
   try {
      await getData("post", newUrl, "url/shorturl", token);
      dispatch(sendUrl(newUrl));
      dispatch(urlCreated());
   } catch (err) {
      dispatch(urlCreateFailed());
   }
   dispatch(stopLoading());
};
