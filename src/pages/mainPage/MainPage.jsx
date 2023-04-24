import React from "react";
import Header from "../../components/header/Header";
import Main from "../../components/main/Main";
import CardsInfo from "../../components/CardsInfo/CardsInfo";
import Category from "../../components/Category/Category";

function MainPage() {
  return (
    <>
      <Header />
      <Main />
      <CardsInfo/>
      <Category/>
    </>
  );
}

export default MainPage;
