import React from "react";
import css from "./MainPage.module.scss";
import Card from "../../components/card/Card";
import Header from "../../components/header/Header";
import GifInfo from "../../components/gifInfo/GifInfo";
import PlaceOfChoice from "../../components/placeOfChoice/PlaceOfChoice";

function MainPage() {
  return (
    <div>
      <Header />
      <GifInfo />
      <PlaceOfChoice />
      {/* <Card /> */}
    </div>
  );
}

export default MainPage;
