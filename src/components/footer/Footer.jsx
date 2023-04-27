import React from "react";
import css from "./Footer.module.scss";
import logo from "../../assets/logo2dark-bg.png";
import locationIcon from "../../assets/headerIcons/locationIcon.svg";
import phoneCallIcon from "../../assets/headerIcons/phoneCallIcon.svg";
import dileveryIcon from "../../assets/headerIcons/deliveryIcon.svg";

const Footer = () => {
  return (
    <footer className={css.wrapper}>
      <div className={css.logo}>
        <img src={logo} alt="" />
        <p>
          Торговая сеть «СтройДвор.KG» – перспективная компания Кыргызстана,
          специализирующаяся на поставках и продаже строительных товаров и
          товаров хозяйственного назначения.
        </p>
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
