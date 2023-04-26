import React from 'react'
import scss from './Category.module.scss'
import box1 from '../../assets/navBarIcons/bagImg.svg'

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
                        <p>Заборная сетка</p>
                    </a>
                </div>
                <div className={scss.box2}>
                    <a href="">
                        <img src={box1} alt="" />
                        <p>Гипсокортон</p>
                    </a>
                </div>
                <div className={scss.box2}>
                    <a href="">
                        <img src={box1} alt="" />
                        <p>Гипсокортон</p>
                    </a>
                </div>
                <div className={scss.box2}>
                    <a href="">
                        <img src={box1} alt="" />
                        <p>Гипсокортон</p>
                    </a>
                </div>
                <div className={scss.box2}>
                    <a href="">
                        <img src={box1} alt="" />
                        <p>Гипсокортон</p>
                    </a>
                </div>
                <div className={scss.box2}>
                    <a href="">
                        <img src={box1} alt="" />
                        <p>Гипсокортон</p>
                    </a>
                </div>
                <div className={scss.box2}>
                    <a href="">
                        <img src={box1} alt="" />
                        <p>Гипсокортон</p>
                    </a>
                </div>
                <div className={scss.box2}>
                    <a href="">
                        <img src={box1} alt="" />
                        <p>Гипсокортон</p>
                    </a>
                </div>
                <div className={scss.box2}>
                    <a href="">
                        <img src={box1} alt="" />
                        <p>Гипсокортон</p>
                    </a>
                </div>
                <div className={scss.box2}>
                    <a href="">
                        <img src={box1} alt="" />
                        <p>Гипсокортон</p>
                    </a>
                </div>
                <div className={scss.box2}>
                    <a href="">
                        <img src={box1} alt="" />
                        <p>Гипсокортон</p>
                    </a>
                </div>
                <div className={scss.box2}>
                    <a href="">
                        <img src={box1} alt="" />
                        <p>Гипсокортон</p>
                    </a>
                </div>
                <div className={scss.box2}>
                    <a href="">
                        <img src={box1} alt="" />
                        <p>Гипсокортон</p>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Category