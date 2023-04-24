import React from "react";
import css from "./MainPage.module.scss";
import Card from "../../components/card/Card";
import Footer from "../../components/footer/Footer";
import GifInfo from "../../components/gifInfo/GifInfo";
import Header from "../../components/header/Header";
import DropDown from "../../components/dropdown/DropDown";
import PlaceOfChoice from "../../components/placeOfChoice/PlaceOfChoice";
import BlockInfo from "../../components/blockInfo/BlockInfo";

function MainPage() {
  return (
    <div className={css.wrapper}>
      
      <Header />
      <Card/>
      <GifInfo/>
      <Footer/>
      <PlaceOfChoice />
    </div>

  );
}

export default MainPage;
