import React from "react";
import Header from "../../components/header/Header";
import GifInfo from "../../components/gifInfo/GifInfo";
import PlaceOfChoice from "../../components/placeOfChoice/PlaceOfChoice";

function MainPage() {
  return (
    <div>
      <Header />
      <PlaceOfChoice />
      <GifInfo />
    </div>
  );
}

export default MainPage;
