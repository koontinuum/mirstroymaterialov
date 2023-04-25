import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/mainPage/MainPage";

function Routings() {
  return (
    <div className="content">
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default Routings;
