import React from 'react'
import scss from './Category.module.scss'

function Category() {
  return (
    <div className={scss.wrapper}>
        <div className={scss.top_block}>
            <h3>Категории товаров</h3>
        </div>
        <div className={scss.container}>

        </div>
    </div>
  )
}

export default Category