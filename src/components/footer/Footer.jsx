import React from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

import css from "./Footer.module.scss";
import logo from "../../assets/logo2dark-bg.png";
import locationIcon from "../../assets/headerIcons/locationIcon.svg";
import phoneCallIcon from "../../assets/headerIcons/phoneCallIcon.svg";
import dileveryIcon from "../../assets/icons8-fast-shipping-64.png";

const Footer = () => {
  return (
    <footer className={css.wrapper}>
      <div className={css.logo}>
        <img src={logo} alt="" />
        <YMaps>
          <div className={css.gps}>
            <Map
              style={{ width: "400px", height: "200px" }}
              defaultState={{
                center: [55.611914, 37.485882],
                zoom: 15,
              }}
            >
              <Placemark geometry={[55.611914, 37.485882]} />
            </Map>
          </div>
        </YMaps>
      </div>
      <div className={css.footer_service}>
        <h4>Наши основные приоритеты</h4>
        <ul>
          <li>Комплексный подход</li>
          <li>
            Одной из главных задач компании является обеспечение своих клиентов
            любым необходимым ассортиментом строительных материалов в одном
            централизованном месте.
          </li>
          <li>Здесь есть все: от гвоздя до целого дома.</li>
          <li>Шаговая доступность</li>
        </ul>
      </div>
      <div className={css.footer_feedback}>
        <div className={css.contacts}>
          <img src={phoneCallIcon} alt="" />
          <div>
            <b>+79017029445</b>
            <b>+79160540090</b>
          </div>
        </div>
        <div className={css.location}>
          <img src={dileveryIcon} alt="" />
          <p>
            Доставка по Москве <br /> и Московской области. <br /> Оплата по
            факту доставки.
          </p>
        </div>
        <div className={css.materials}>
          <img src={locationIcon} alt="" />
          <p>
            Строительный рынок "Мельница" <br /> МКАД 41 км наша местоположение.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
