import React, { Component, useRef } from "react";
import Slider from "react-slick";
import css from "./PlaceOfChoice.module.scss";
import mainImg from "../../../assets/mainImg3.jpg";
import click from "../../../assets/click.png";

const PlaceOfChoice = () => {
  const arrowRef = useRef(null);
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
  };
  return (
    <div className={css.main}>
      <button
        className={css.prevClick}
        onClick={() => arrowRef.current.slickNext()}
      >
        <img src={click} alt="" />
      </button>
      <Slider ref={arrowRef} {...settings}>
        <div className={css.mainImg}>
          <h3 className={css.mainImgContents}>
            <img src={mainImg} alt="" />
          </h3>
        </div>
        <div className={css.mainImg}>
          <h3 className={css.mainImgContents}>
            <img src={mainImg} alt="" />
          </h3>
        </div>
        <div className={css.mainImg}>
          <h3 className={css.mainImgContents}>
            <img src={mainImg} alt="" />
          </h3>
        </div>
        <div className={css.mainImg}>
          <h3 className={css.mainImgContents}>
            <img src={mainImg} alt="" />
          </h3>
        </div>
        <div className={css.mainImg}>
          <h3 className={css.mainImgContents}>
            <img src={mainImg} alt="" />
          </h3>
        </div>
        <div className={css.mainImg}>
          <h3 className={css.mainImgContents}>
            <img src={mainImg} alt="" />
          </h3>
        </div>
      </Slider>
      <button
        className={css.nextClick}
        onClick={() => arrowRef.current.slickPrev()}
      >
        <img src={click} alt="" />
      </button>
    </div>
  );
};

export default PlaceOfChoice;
