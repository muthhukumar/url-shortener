import React from "react";
import { NavLink } from "react-router-dom";

import "./NavLinks.css";

const NavLinks: React.FC = () => {
  return (
    <ul className="nav-link">
      <li>
        <NavLink to="/home" exact>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/myurls" exact>
          MyUrls
        </NavLink>
      </li>
      <li>
        <NavLink to="/signup" exact>
          Signup
        </NavLink>
      </li>
      <li>
        <NavLink to="/login" exact>
          Login
        </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
