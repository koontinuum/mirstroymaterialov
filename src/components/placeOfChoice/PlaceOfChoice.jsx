import React, { useRef } from "react";
import Slider from "react-slick";
import css from "./PlaceOfChoice.module.scss";
import slideImg1 from "../../assets/choicesIcons/slideImg1.jpg";
import mainImg2 from "../../assets/choicesIcons/mainImg2.jpg";
import mainImg3 from "../../assets/choicesIcons/main3.jpg";
import mainImg4 from "../../assets/choicesIcons/mainImg4.jpeg";
import mainImg5 from "../../assets/choicesIcons/mainImg5.avif";
import mainImg6 from "../../assets/choicesIcons/mainImg6.jpg";
import click from "../../assets/choicesIcons/click.png";

const PlaceOfChoice = () => {
  const arrowRef = useRef(null);
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: false,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
  };
  return (
    <div className={css.main}>
      <button
        className={css.nextClick}
        onClick={() => arrowRef.current.slickNext()}
      >
        <img src={click} alt="" />
      </button>
      <Slider ref={arrowRef} {...settings}>
        <div className={css.mainImg}>
          <h3 className={css.mainImgContents}>
            <b>Стеновые строительные материалы</b>
            <img src={slideImg1} alt="" />
          </h3>
        </div>
        <div className={css.mainImg}>
          <h3 className={css.mainImgContents}>
            <b>Сухие строительные смеси</b>
            <img src={mainImg2} alt="" />
          </h3>
        </div>
        <div className={css.mainImg}>
          <h3 className={css.mainImgContents}>
            <b>Лакокрасочные материалы</b>
            <img src={mainImg3} alt="" />
          </h3>
        </div>
        <div className={css.mainImg}>
          <h3 className={css.mainImgContents}>
            <b>Строительные расходные материалы</b>
            <img src={mainImg4} alt="" />
          </h3>
        </div>
        <div className={css.mainImg}>
          <h3 className={css.mainImgContents}>
            <b>Металлопрокат</b>
            <img src={mainImg5} alt="" />
          </h3>
        </div>
        <div className={css.mainImg}>
          <h3 className={css.mainImgContents}>
            <b>Электрика</b>
            <img src={mainImg6} alt="" />
          </h3>
        </div>
      </Slider>
      <button
        className={css.prevClick}
        onClick={() => arrowRef.current.slickPrev()}
      >
        <img src={click} alt="" />
      </button>
    </div>
  );
};

export default PlaceOfChoice;
