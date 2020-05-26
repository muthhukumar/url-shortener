import React from "react";

import "./Notification.css";
import Button from "../../FormElements/Button/Button";

interface NotificationProps {
  classes: "error" | "success" | "info" | "warning";
  text: string;
}

const Notification: React.FC<NotificationProps> = (props) => {
  return (
    <div className={`notification-container ${props.classes}`}>
      <div className="notification-wrapper">
        <i>INFO</i>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default Notification;
