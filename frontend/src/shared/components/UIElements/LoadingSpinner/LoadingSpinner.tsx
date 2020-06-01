import React from "react";

import "./LoadingSpinner.css";

const LoadingSpinner: React.FC = (props) => {
  return (
    <div className="loading-container">
      <div className="lds-circle">
        <div></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
