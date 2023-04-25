import React from "react";
import css from "./Routings.module.scss";
import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/mainPage/MainPage";
import DropDown from "../components/dropdown/DropDown";

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
