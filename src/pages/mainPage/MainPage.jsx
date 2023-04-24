import React from "react";
import css from "./MainPage.module.scss";
import Card from "../../components/card/Card";
import GifInfo from "../../components/gifInfo/GifInfo";
import Header from "../../components/header/Header";
import Main from "../../components/main/Main";

function MainPage() {
  return (
    <div className={css.wrapper}>
      {/* <DropDown /> */}
      <Header />
      <Main />
    </>
  );
}

export default MainPage;
