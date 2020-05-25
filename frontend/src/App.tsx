import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  // Redirect,
} from "react-router-dom";

import MainNavigation from "./shared/components/Navigation/MainNavigation";
import Home from "./Url/Home";
import MyURLs from "./Url/MyURLs";
import SignUp from "./User/SignUp";
import Login from "./User/Login";
import RedirectUrl from "./Url/Redirect";

function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/myurls">
            <MyURLs />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/:shorturl">
            <RedirectUrl />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
