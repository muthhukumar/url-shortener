import React from "react";
import { useDispatch, useSelector } from "react-redux";

import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import Title from "../UIElements/Title/Title";
import LoadingSpinner from "../UIElements/LoadingSpinner/LoadingSpinner";
import { RootState } from "../../store/index";

const MainNavigation: React.FC = () => {
  const isLoading = useSelector((state: RootState) => {
    return state.ui.isLoading;
  });
  return (
    <MainHeader>
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
