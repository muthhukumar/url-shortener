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
import Notification from "./shared/components/UIElements/Notification/Notification";
import { RootState } from "./shared/store/index";
import { closeNotification } from "./shared/store/actionCreators";

function App() {
  const [token, isOpen] = useSelector((state: RootState) => {
    return [state.user.token, state.ui.isNotificationOpen];
  });
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(token);
  }, [token]);

  const onCloseHandler = () => {
    dispatch(closeNotification());
  };
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
      {isOpen && (
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
