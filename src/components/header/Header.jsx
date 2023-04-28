import React from "react";
import css from "./Header.module.scss";
import phoneCallIcon from "../../assets/headerIcons/phoneCallIcon.svg";
import dileveryIcon from "../../assets/icons8-fast-shipping-64.png";
import logo from "../../assets/logo.png";
import Search from "../search/Search";

function Header() {
  return (
    <div className={css.headerContent}>
      <img src={logo} alt="" />
      <strong>
        Качество и надежность <br /> это наша главная цель!
      </strong>
      <Search />
      <div className={css.location}>
        <img src={dileveryIcon} alt="" />
        <p>
          Доставка по Москве <br /> и Московской области. <br /> Оплата по факту
          доставки.
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
  );
}

export default Header;
