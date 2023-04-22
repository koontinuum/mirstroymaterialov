import React from 'react'
import img from '../../assets/Анкерная-шайба.jpg'
import css from './Card.module.scss'

const Card = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.card}>
        <div className={css.card_img}>
          <img src={img} alt="" />
        </div>
        <div className={css.card_info}>
          <h5>Анкерная шайба АШ-6</h5>
          <h4>220 руб/шт</h4>
          <div className={css.card_btn}>
            <button> В корзину </button>
            <button> Подробнее</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card
