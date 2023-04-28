import React from "react";
import css from "./DropDown.module.scss";
import facadeImg from "../../assets/navBarIcons/facadeImg.svg";
import metalImg from "../../assets/navBarIcons/rolledMetalImg.svg";
import bagImg from "../../assets/navBarIcons/bagImg.svg";
import lacquerImg from "../../assets/navBarIcons/varnishImg.svg";
import glueImg from "../../assets/navBarIcons/glueImg.svg";
import materialImg from "../../assets/navBarIcons/materialImg.svg";
import plumbigImg from "../../assets/navBarIcons/plumbigImg.svg";
import lumberImg from "../../assets/navBarIcons/lumberImg.svg";

function DropDown() {
  return (
    <div>
      <div class={css.navbar}>
        <div class={css.dropdown}>
          <button class={css.dropbtn}>
            <img src={facadeImg} alt="" />
          </button>
          <div class={css.dropdowncontent}>
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
        <div class={css.dropdown}>
          <button class={css.dropbtn}>
            <img src={metalImg} alt="" />
          </button>
          <div class={css.dropdowncontent}>
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
        <div class={css.dropdown}>
          <button class={css.dropbtn}>
            <img src={bagImg} alt="" />
          </button>
          <div class={css.dropdowncontent}>
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
        <div class={css.dropdown}>
          <button class={css.dropbtn}>
            <img src={lacquerImg} alt="" />
          </button>
          <div class={css.dropdowncontent}>
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
        <div class={css.dropdown}>
          <button class={css.dropbtn}>
            <img src={glueImg} alt="" />
          </button>
          <div class={css.dropdowncontent}>
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
        <div class={css.dropdown}>
          <button class={css.dropbtn}>
            <img src={materialImg} alt="" />
          </button>
          <div class={css.dropdowncontent}>
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
        <div class={css.dropdown}>
          <button class={css.dropbtn}>
            <img src={plumbigImg} alt="" />
          </button>
          <div class={css.dropdowncontent}>
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
        <div class={css.dropdown}>
          <button class={css.dropbtn}>
            <img src={lumberImg} alt="" />
          </button>
          <div class={css.dropdowncontent}>
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DropDown;
