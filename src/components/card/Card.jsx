import React, { useState } from "react";
import { CardData } from "../../constants/CardData";
import useSearch from "../../hooks/UseSearch";
import css from "./Card.module.scss";

const Card = () => {
  const {search }= useSearch()
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const catagory = [
    " алфавиту с начала",
    " алфавиту с конца",
    " цена возрастанию",
    " цена убывания",
  ];
console.log(search)
  const onClickSort = (index) => {
    setSelected(index);
    index === 0
      ? CardData.sort((x, y) => (x.title > y.title ? 1 : -1))
      : index === 1
      ? CardData.sort((x, y) => (y.title > x.title ? 1 : -1))
      : index === 2
      ? CardData.sort((x, y) => x.price - y.price)
      : CardData.sort((x, y) => y.price - x.price);
  };

  const popup = () => {
    setOpen(!open);
  };
  return (
    <div className={css.wrapper}>
      <div className={css.category}>
        <h5 onClick={() => popup()}>
          Сортировка по
          {catagory[selected]}
        </h5>
        <ul>
          {open &&
            catagory.map((item, i) => (
              <li
                onClick={() => onClickSort(i)}
                className={selected === i ? css.selected : ""}
              >
                {item}
              </li>
            ))}
        </ul>
      </div>
      {CardData.filter((item) => {
        if (item.title.toLocaleLowerCase().includes(search)) {
          return true;
        }
        return false;
      }).map((item) => (
        <div className={css.card} key={item.id}>
          <div className={css.card_img}>
            <img src={item.img} alt="" />
          </div>
          <div className={css.card_info}>
            <h5>{item.title}</h5>
            <h4>{item.price}</h4>
            <div className={css.card_btn}>
              <button> В корзину </button>
              <button> Подробнее</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
