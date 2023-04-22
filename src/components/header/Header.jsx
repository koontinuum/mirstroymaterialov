import React from "react";
import css from "./Header.module.scss";
import searchIcon from "../../assets/searchIcon.svg";
import phoneCallIcon from "../../assets/phoneCallIcon.svg";

function Header() {
  return (
    <div className="container">
      <div className={css.headerContent}>
        <strong>Мир Стройматериалов</strong>
        <div className={css.searchEngine}>
          <button>
            <img src={searchIcon} alt="" />
          </button>
          <input type="search" placeholder="Поиск продукции..." />
        </div>
        <p>
          Широкий ассортимент <br /> строительных материалов.
        </p>
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
