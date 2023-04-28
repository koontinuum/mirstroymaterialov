import React from "react";
import scss from "./Category.module.scss";
import img1 from "../../assets/iconCardCategory/steny.jpg";
import img2 from "../../assets/iconCardCategory/smesi.jpg";
import img3 from "../../assets/iconCardCategory/lacocrasochnay.png";
import img4 from "../../assets/iconCardCategory/gidroizolyaci.jpg";
import img5 from "../../assets/iconCardCategory/teploizolyaciyz.jpg";
import img6 from "../../assets/iconCardCategory/klei-germetik.jpg";
import img7 from "../../assets/iconCardCategory/stroitelno.jpg";
import img8 from "../../assets/iconCardCategory/avtomat.png";
import img9 from "../../assets/iconCardCategory/wires-3274341_1280.jpg";
import img10 from "../../assets/iconCardCategory/vykluchatel.png";
import img11 from "../../assets/iconCardCategory/santehnika.jpg";
import img12 from "../../assets/iconCardCategory/poli.png";
import img13 from "../../assets/iconCardCategory/metal-product.jpg";
import img14 from "../../assets/iconCardCategory/myk.jpg";
import img15 from "../../assets/iconCardCategory/pilomaterial.jpg";

function Category() {
  return (
    <div className={scss.wrapper}>
      <div className={scss.top_block}>
        <h3>Категории товаров</h3>
        <a href="#">ВЕСЬ КАТАЛОГ</a>
      </div>
      <div className={scss.container}>
        <div className={scss.box1}>
          <a href="">
            <img src={img1} alt="" />
            <p>Стеновые и фасадные метериалы</p>
          </a>
        </div>
        <div className={scss.box1}>
          <a href="">
            <img src={img2} alt="" />
            <p>Сухие строительные смеси</p>
          </a>
        </div>
        <div className={scss.box1}>
          <a href="">
            <img src={img3} alt="" />
            <p>Лакокрасочные метериалы</p>
          </a>
        </div>
        <div className={scss.box1}>
          <a href="">
            <img className={scss.img_gidro} src={img4} alt="" />
            <p>Гидроизоляция</p>
          </a>
        </div>
        <div className={scss.box1}>
          <a href="">
            <img className={scss.img_teplo} src={img5} alt="" />
            <p>Теплоизоляция</p>
          </a>
        </div>
        <div className={scss.box1}>
          <a href="">
            <img src={img6} alt="" />
            <p>Пены, Клеи, Герметики</p>
          </a>
        </div>
        <div className={scss.box1}>
          <a href="">
            <img src={img7} alt="" />
            <p>Строительные Расходные материалы</p>
          </a>
        </div>
        <div className={scss.box1}>
          <a href="">
            <img src={img8} alt="" />
            <p>Автоматы</p>
          </a>
        </div>
        <div className={scss.box1}>
          <a href="">
            <img className={scss.img_electrica} src={img9} alt="" />
            <p>Электрика</p>
          </a>
        </div>
        <div className={scss.box1}>
          <a href="">
            <img src={img10} alt="" />
            <p>Выключатель</p>
          </a>
        </div>
        <div className={scss.box1}>
          <a href="">
            <img className={scss.img_santehnica} src={img11} alt="" />
            <p>Сантехника</p>
          </a>
        </div>
        <div className={scss.box1}>
          <a href="">
            <img className={scss.img_poli} src={img12} alt="" />
            <p>Полипропиленовые фитинги</p>
          </a>
        </div>
        <div className={scss.box1}>
          <a href="">
            <img src={img13} alt="" />
            <p>Полипропиленовые фитинги</p>
          </a>
        </div>
        <div className={scss.box1}>
          <a href="">
            <img src={img14} alt="" />
            <p>Крепежные материалы</p>
          </a>
        </div>
        <div className={scss.box1}>
          <a href="">
            <img src={img15} alt="" />
            <p>Пиломатериалы</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Category;
