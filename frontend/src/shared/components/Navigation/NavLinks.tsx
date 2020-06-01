import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import "./NavLinks.css";
import { RootState } from "../../store/index";
import Button from "../FormElements/Button/Button";
import { logoutAction } from "../../../User/store/actionCreators";
import { myUrls, createNewUrl } from "../../../Url/store/actionCreators";
import { logout } from "../../store/actionCreators";

const NavLinks: React.FC = () => {
  const token = useSelector((state: RootState) => {
    return state.user.token;
  });
  const dispatch = useDispatch();
  const onLogoutHandler = () => {
    dispatch(logoutAction());
    dispatch(createNewUrl());
    dispatch(logout());
    dispatch(myUrls([]));
  };
  return (
    <ul className="nav-link">
      <li>
        <NavLink to="/home" exact>
          Home
        </NavLink>
      </li>
      {token && (
        <li>
          <NavLink to="/myurls" exact>
            MyUrls
          </NavLink>
        </li>
      )}
      {!token && (
        <li>
          <NavLink to="/signup" exact>
            Signup
          </NavLink>
        </li>
      )}
      {!token && (
        <li>
          <NavLink to="/login" exact>
            Login
          </NavLink>
        </li>
      )}
      {token && (
        <li>
          <Button
            disabled={false}
            classes="logout-btn"
            onClick={onLogoutHandler}
          >
            logout
          </Button>
        </li>
      )}
    </ul>
  );
};

export default NavLinks;
