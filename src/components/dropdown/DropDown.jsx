import React from "react";
import css from "./DropDown.module.scss";
import test1 from "../../assets/navBarIcons/1.svg";
import test2 from "../../assets/navBarIcons/2.svg";
import test3 from "../../assets/navBarIcons/3.svg";

function DropDown() {
  return (
    <div>
      <div class={css.navbar}>
        <div class={css.dropdown}>
          <button class={css.dropbtn}>
            <img src={test1} alt="" />
          </button>
          <div class={css.dropdowncontent}>
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
        <div class={css.dropdown}>
          <button class={css.dropbtn}>
            <img src={test2} alt="" />
          </button>
          <div class={css.dropdowncontent}>
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
        <div class={css.dropdown}>
          <button class={css.dropbtn}>
            <img src={test3} alt="" />
          </button>
          <div class={css.dropdowncontent}>
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
        <div class={css.dropdown}>
          <button class={css.dropbtn}>
            <img src={test1} alt="" />
          </button>
          <div class={css.dropdowncontent}>
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
        <div class={css.dropdown}>
          <button class={css.dropbtn}>
            <img src={test1} alt="" />
          </button>
          <div class={css.dropdowncontent}>
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
        <div class={css.dropdown}>
          <button class={css.dropbtn}>
            <img src={test1} alt="" />
          </button>
          <div class={css.dropdowncontent}>
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
        <div class={css.dropdown}>
          <button class={css.dropbtn}>
            <img src={test1} alt="" />
          </button>
          <div class={css.dropdowncontent}>
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
        <div class={css.dropdown}>
          <button class={css.dropbtn}>
            <img src={test1} alt="" />
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
