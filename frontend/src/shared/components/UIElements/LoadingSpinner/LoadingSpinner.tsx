import React from "react";

import "./LoadingSpinner.css";

const LoadingSpinner: React.FC = (props) => {
  return (
    <div className="lds-circle">
      <div></div>
    </div>
  );
};

export default LoadingSpinner;
