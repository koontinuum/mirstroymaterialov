import React from 'react'
import scss from './Category.module.scss'
import { CategoryData } from '../../constants/CategoryData';

function Category({img, title}) {

    return (
        <div className={scss.wrapper}>
            <div className={scss.top_block}>
                <h3>Категории товаров</h3>
            </div>
            <div className={scss.container}>
                {
                    CategoryData.map(item => (
                        <div className={scss.box1} key={item.id}>
                            <a href="">
                                <img src={item.img} alt="" />
                                <p>{item.title}</p>
                            </a>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Category;
