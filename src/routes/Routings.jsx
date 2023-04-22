import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/mainPage/MainPage";

function Routings() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </>
  );
}

export default Routings;
