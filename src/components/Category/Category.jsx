import React from 'react'
import scss from './Category.module.scss'
import box1 from '../../assets/iconCardCategory/pipe-svgrepo-com.svg'
import box2 from '../../assets/iconCardCategory/heavy-metal-svgrepo-com.svg'
import box3 from '../../assets/iconCardCategory/wood-board-wood-svgrepo-com.svg'
import box4 from '../../assets/iconCardCategory/barn-building-farm-svgrepo-com.svg'
import box5 from '../../assets/iconCardCategory/square-grid-svgrepo-com.svg'
import box6 from '../../assets/iconCardCategory/fence-two-svgrepo-com.svg'
import box7 from '../../assets/iconCardCategory/noun-drywall-5057797.svg'
import box8 from '../../assets/iconCardCategory/noun-insulation-tape-4280964.svg'
import box9 from '../../assets/iconCardCategory/noun-cement-3196523.svg'
import box10 from '../../assets/iconCardCategory/noun-varnish-1283309.svg'
import box11 from '../../assets/iconCardCategory/noun-tools-3081859.svg'
import box12 from '../../assets/iconCardCategory/noun-mating-screws-3634020.svg'

function Category() {
    return (
        <div className={scss.wrapper}>
            <div className={scss.top_block}>
                <h3>Категории товаров</h3>
            </div>
            <div className={scss.container}>
                <div className={scss.box1}>
                    <a href="">
                        <img src={box1} alt="" />
                        <p>Арматура</p>
                    </a>
                </div>
                <div className={scss.box2}>
                    <a href="">
                        <img src={box2} alt="" />
                        <p>Металлопрокат</p>
                    </a>
                </div>
                <div className={scss.box2}>
                    <a href="">
                        <img src={box3} alt="" />
                        <p>Пиломатериалы</p>
                    </a>
                </div>
                <div className={scss.box2}>
                    <a href="">
                        <img src={box4} alt="" />
                        <p>Металлоконструкции</p>
                    </a>
                </div>
                <div className={scss.box2}>
                    <a href="">
                        <img src={box5} alt="" />
                        <p>Сетки МАК</p>
                    </a>
                </div>
                <div className={scss.box2}>
                    <a href="">
                        <img src={box6} alt="" />
                        <p>Заборная сетка</p>
                    </a>
                </div>
                <div className={scss.box2}>
                    <a href="">
                        <img src={box7} alt="" />
                        <p>Гипсокортон</p>
                    </a>
                </div>
                <div className={scss.box2}>
                    <a href="">
                        <img src={box8} alt="" />
                        <p>Утеплитель</p>
                    </a>
                </div>
                <div className={scss.box2}>
                    <a href="">
                        <img src={box9} alt="" />
                        <p>Cтроительные смеси</p>
                    </a>
                </div>
                <div className={scss.box2}>
                    <a href="">
                        <img src={box10} alt="" />
                        <p>Лакокрасочные метериалы</p>
                    </a>
                </div>
                <div className={scss.box2}>
                    <a href="">
                        <img src={box11} alt="" />
                        <p>Инструменты</p>
                    </a>
                </div>
                <div className={scss.box2}>
                    <a href="">
                        <img src={box1} alt="" />
                        <p>Водопровод и канализация</p>
                    </a>
                </div>
                <div className={scss.box2}>
                    <a href="">
                        <img src={box12} alt="" />
                        <p>Крпежи</p>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Category