import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import MainNavigation from "./shared/components/Navigation/MainNavigation";
import Home from "./Url/home/Home";
import MyURLs from "./Url/MyURLs/MyURLs";
import SignUp from "./User/SignUp";
import Login from "./User/Login";
import RedirectUrl from "./Url/Redirect";
import { RootState } from "./shared/store/index";
import { thunkAutoLogin } from "./User/store/thunkAsyncActionCreator";

function App() {
  const token = useSelector((state: RootState) => {
    return state.user.token;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    if (!token) dispatch(thunkAutoLogin());
  }, [dispatch, token]);

  let route = null;
  if (token) {
    route = (
      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/myurls" exact component={MyURLs} />
        <Route path="/link/:expired" exact component={RedirectUrl} />
        <Redirect to="/home" />
      </Switch>
    );
  } else {
    route = (
      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/login" exact component={Login} />
        <Route path="/link/:expired" exact component={RedirectUrl} />
        <Redirect to="/home" />
      </Switch>
    );
  }

  return (
    <Router>
      <MainNavigation />
      <main>{route}</main>
    </Router>
  );
}

export default App;
