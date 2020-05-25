import React from "react";

import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import Title from "../UIElements/Title/Title";

const MainNavigation: React.FC = () => {
  return (
    <MainHeader>
      <Title classes="main-header__title">URLShortener</Title>;
      <nav>
        <NavLinks />
      </nav>
    </MainHeader>
  );
};

export default MainNavigation;
