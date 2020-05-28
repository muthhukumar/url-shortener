import React from "react";

import "./Notification.css";
import Button from "../../FormElements/Button/Button";

interface NotificationProps {
  classes: "error" | "success" | "info" | "warning";
  text: string;
  onClick: () => void;
}

const Notification: React.FC<NotificationProps> = (props) => {
  return (
    <div className={`notification-container ${props.classes}`}>
      <div className="notification-wrapper">
        <div className="message">{props.classes.toUpperCase()}</div>
        <p>{props.text}</p>
        <Button onClick={props.onClick} classes="close-btn" disabled={false}>
          close
        </Button>
      </div>
    </div>
  );
};

export default Notification;
