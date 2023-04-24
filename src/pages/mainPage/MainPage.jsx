import React from "react";
import css from "./MainPage.module.scss";
import Header from "../../components/header/Header";
import CardsInfo from "../../components/CardsInfo/CardsInfo";
import Category from "../../components/Category/Category";

function MainPage() {
  return (
    <div className={css.wrapper}>
      {/* <DropDown /> */}
      <Header />
      <CardsInfo/>
      <Category/>
    </div>
  );
}

export default MainPage;
