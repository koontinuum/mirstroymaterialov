import React from "react";
import css from "./Header.module.scss";
import searchIcon from "../../assets/headerIcons/searchIcon.svg";
import phoneCallIcon from "../../assets/headerIcons/phoneCallIcon.svg";
import dileveryIcon from "../../assets/headerIcons/deliveryIcon.svg";
import materialIcon from "../../assets/headerIcons/materialsIcon.svg";
import logo from "../../assets/bec2cd55-8711-4f51-a3ee-427a3810121d.png";

function Header() {
  return (
    <div className="container">
      <div className={css.headerContent}>
        <img src={logo} alt="" />
        <div className={css.searchEngine}>
          <button>
            <img src={searchIcon} alt="" />
          </button>
          <input type="search" placeholder="Поиск продукции..." />
        </div>
        <div className={css.materials}>
          <img src={materialIcon} alt="" />
          <p>
            Широкий ассортимент <br /> строительных материалов.
          </p>
        </div>
        <div className={css.location}>
          <img src={dileveryIcon} alt="" />
          <p>
            Доставка по Москве <br /> и Московской области
          </p>
        </div>
        <div className={css.contacts}>
          <img src={phoneCallIcon} alt="" />
          <div>
            <b>+79017029445</b>
            <b>+79160540090</b>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
