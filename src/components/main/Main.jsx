import React from "react";
import css from "./Main.module.scss";
import PlaceOfChoice from "./placeOfChoice/PlaceOfChoice";

function Main() {
  return (
    <div className={css.mainContent}>
      <PlaceOfChoice />
      
    </div>
  );
}

export default Main;
