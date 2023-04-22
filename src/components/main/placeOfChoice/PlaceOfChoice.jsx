import React from "react";
import css from "./PlaceOfChoice.module.scss";
import mainImg1 from "../../../assets/mainImg1.avif";
import mainImg3 from "../../../assets/mainImg3.jpg";

function PlaceOfChoice() {
  return (
    <div className={css.choiceContent}>
      <div className={css.firstContent}>
        <h1>Строительные материалы</h1>
        <img src={mainImg1} alt="" />
      </div>
      <div className={css.secondContent}>
        <h1>Cантехнические материалы</h1>
        <img src={mainImg3} alt="" />
      </div>
    </div>
  );
}

export default PlaceOfChoice;
