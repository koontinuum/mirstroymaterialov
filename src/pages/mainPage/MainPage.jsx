import React from "react";
import Header from "../../components/header/Header";
import Category from "../../components/Category/Category";
import Card from "../../components/card/Card";
import GifInfo from "../../components/gifInfo/GifInfo";
import PlaceOfChoice from "../../components/placeOfChoice/PlaceOfChoice";
import CardsInfo from "../../components/CardsInfo/CardsInfo";

function MainPage() {
  return (
    <div>
      <Header />
      <GifInfo />
      <PlaceOfChoice />
      <Category />
      <CardsInfo />
      <Card />
    </div>
  );
}

export default MainPage;
