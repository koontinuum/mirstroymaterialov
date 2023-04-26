import React from "react";
import CardsInfo from "../../components/CardsInfo/CardsInfo";
import Category from "../../components/Category/Category";
import Card from "../../components/card/Card";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import GifInfo from "../../components/gifInfo/GifInfo";
import PlaceOfChoice from "../../components/placeOfChoice/PlaceOfChoice";
import useSearch from "../../hooks/UseSearch";

function MainPage() {
  const { openCard } = useSearch();
  console.log(openCard);
  return (
    <div>
      <Header />
      {openCard && (
        <div>
          <Card />
        </div>
      )}
      <PlaceOfChoice />
      <Category />
      <CardsInfo />
      <GifInfo />
      <Footer />
    </div>
  );
}

export default MainPage;
