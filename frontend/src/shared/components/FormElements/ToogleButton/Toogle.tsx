import React from "react";

import "./Toogle.css";
import Input from "../Input/Input";

const Toogle = () => {
  return (
    <label className="switch">
      <input type="checkbox" className="toogle-input" />
      <span className="slider round"></span>
    </label>
  );
};

export default Toogle;
