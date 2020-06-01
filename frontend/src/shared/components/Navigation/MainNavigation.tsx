import React from "react";
import { useDispatch, useSelector } from "react-redux";

import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import Title from "../UIElements/Title/Title";
import LoadingSpinner from "../UIElements/LoadingSpinner/LoadingSpinner";
import { RootState } from "../../store/index";
import Notification from "../UIElements/Notification/Notification";
import { closeNotification } from "../../store/actionCreators";

const MainNavigation: React.FC = () => {
  const dispatch = useDispatch();
  const [
    isLoading,
    isNotificationOpen,
    errorMessage,
    notificationClass,
  ] = useSelector((state: RootState) => {
    return [
      state.ui.isLoading,
      state.ui.isNotificationOpen,
      state.ui.errorMessage,
      state.ui.notificationType,
    ];
  });
  const notificationCloseHandler = () => {
    dispatch(closeNotification());
  };
  return (
    <MainHeader>
      {isNotificationOpen && (
        <Notification
          text={errorMessage}
          classes={notificationClass}
          onClick={notificationCloseHandler}
        />
      )}
      <Title classes="main-header__title">URLShortener</Title>
      <div className="main-header__container">
        <nav>
          <NavLinks />
        </nav>
        {isLoading && <LoadingSpinner />}
      </div>
    </MainHeader>
  );
};

export default MainNavigation;
