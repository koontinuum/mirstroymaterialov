import React from "react";
import CardsInfo from "../../components/CardsInfo/CardsInfo";
import Category from "../../components/Category/Category";
import Card from "../../components/card/Card";
import Header from "../../components/header/Header";
import GifInfo from "../../components/gifInfo/GifInfo";
import PlaceOfChoice from "../../components/placeOfChoice/PlaceOfChoice";

function MainPage() {
  return (
    <div>
      <Header />
      <Category/>
      <Card/>
      <PlaceOfChoice />
      <GifInfo />
      {/* <Card /> */}
    </div>
  );
}

export default MainPage;
