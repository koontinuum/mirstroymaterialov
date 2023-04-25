import React from "react";
import css from "./GifInfo.module.scss";

const GifInfo = () => {
  return (
    <section className={css.wrapper}>
      <div className={css.wrap_info}>
        <h1>О МАГАЗИНЕ</h1>
        <h2>Строительный Магазин</h2>
        <p>
          Добро пожаловать в наш магазин стройматериалов! Здесь вы найдете все
          необходимое для ремонта, строительства или отделки вашего дома,
          квартиры или офиса. Мы предлагаем широкий ассортимент
          высококачественных строительных материалов от ведущих производителей,
          таких как кирпич, цемент, гипсокартон, изоляционные материалы и многое
          другое. Мы также предоставляем инструменты для выполнения различных
          строительных работ, от мелких ремонтных работ до крупномасштабных
          проектов. Наша команда профессионалов готова помочь вам в выборе
          необходимых материалов и инструментов, а также предоставить экспертные
          советы и рекомендации. Мы гарантируем качество нашей продукции и
          приятные цены на все товары в нашем магазине. Приходите к нам и
          создайте свой дом мечты или обновите свое жилье с помощью наших
          строительных материалов и инструментов!
        </p>
        <button>Подробнее</button>
      </div>
    </section>
  );
};

export default GifInfo;
