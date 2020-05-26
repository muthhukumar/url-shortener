import React, { useRef } from "react";

import "./Toogle.css";

const Toogle = () => {
  return (
    <label className="switch">
      <input type="checkbox" className="toogle-input" />
      <span className="slider round"></span>
    </label>
  );
};

export default Toogle;
