import React from "react";
import Card from "../../components/card/Card";
import GifInfo from "../../components/gifInfo/GifInfo";
import Header from "../../components/header/Header";
import Main from "../../components/main/Main";

function MainPage() {
  return (
    <>
      <Header />
      <Main />
      <Card/>
      <GifInfo/>
    </>
  );
}

export default MainPage;
