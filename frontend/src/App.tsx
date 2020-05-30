import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { useSelector } from "react-redux";

import MainNavigation from "./shared/components/Navigation/MainNavigation";
import Home from "./Url/Home";
import MyURLs from "./Url/MyURLs/MyURLs";
import SignUp from "./User/SignUp";
import Login from "./User/Login";
import RedirectUrl from "./Url/Redirect";
import Notification from "./shared/components/UIElements/Notification/Notification";
import { RootState } from "./shared/store/index";

function App() {
  const [isNotificationOn, setIsNotificationOn] = useState<boolean>(true);
  const token = useSelector((state: RootState) => {
    return state.user.token;
  });

  useEffect(() => {
    console.log(token);
  }, [token]);

  const onCloseHandler = () => {
    setIsNotificationOn(false);
  };
  let route = null;
  if (token) {
    route = (
      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/myurls" exact component={MyURLs} />
        <Redirect to="/home" />
      </Switch>
    );
  } else {
    route = (
      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/login" exact component={Login} />
        <Redirect to="/home" />
      </Switch>
    );
  }

  return (
    <Router>
      {isNotificationOn && (
        <Notification
          classes="error"
          text="Testing Notification"
          onClick={onCloseHandler}
        />
      )}
      <MainNavigation />
      <main>{route}</main>
    </Router>
  );
}

export default App;
