import React from "react";
import css from "./MainPage.module.scss";
import Header from "../../components/header/Header";
import CardsInfo from "../../components/CardsInfo/CardsInfo";
import Category from "../../components/Category/Category";
import Card from "../../components/card/Card";
import Footer from "../../components/footer/Footer";
=======
import Header from "../../components/header/Header";
import GifInfo from "../../components/gifInfo/GifInfo";
import PlaceOfChoice from "../../components/placeOfChoice/PlaceOfChoice";

function MainPage() {
  return (
    <div>
      <Header />
      <Category/>
      <Main />
      <Card/>
      <GifInfo/>
      <Footer/>
      <PlaceOfChoice />
      <GifInfo />
      <PlaceOfChoice />
      {/* <Card /> */}
    </div>
  );
}

export default MainPage;
