import React from "react";
import Header from "../../components/header/Header";
import Category from "../../components/Category/Category";
import Card from "../../components/card/Card";
import Footer from "../../components/footer/Footer";
import GifInfo from "../../components/gifInfo/GifInfo";
import PlaceOfChoice from "../../components/placeOfChoice/PlaceOfChoice";
import useSearch from "../../hooks/UseSearch";

function MainPage() {
   const { openCard } = useSearch();
   console.log(openCard)
  return (
    <div>
      <Header />
      {openCard && (
        <div>
          <Card />
        </div>
      )}
      <Category />

      <PlaceOfChoice />
      <GifInfo />
      <Footer />
    </div>
  );
}

export default MainPage;
