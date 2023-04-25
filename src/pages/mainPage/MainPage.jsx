import React from "react";
import css from "./MainPage.module.scss";
import Card from "../../components/card/Card";
import Footer from "../../components/footer/Footer";
import GifInfo from "../../components/gifInfo/GifInfo";
import Header from "../../components/header/Header";
import PlaceOfChoice from "../../components/placeOfChoice/PlaceOfChoice";

function MainPage() {
  return (
    <div className={css.wrapper}>
      {/* <DropDown /> */}
      <Header />
      <PlaceOfChoice />
      <Card/>
      <GifInfo/>
      <Footer/>
      {/* <BlockInfo /> */}
      {/* <Card /> */}
      {/* <GifInfo /> */}
    </div>

  );
}

export default MainPage;
