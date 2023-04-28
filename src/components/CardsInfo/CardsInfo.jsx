import React from 'react'
import scss from './CardsInfo.module.scss'
import icon1 from '../../assets/icon_company.png'
import icon2 from '../../assets/time_work.png'
import icon3 from '../../assets/screwdriver.png'
import icon4 from '../../assets/free-icon-credit-card-271035.png'
import icon5 from '../../assets/free-icon-handset-5495725.png'
import icon6 from '../../assets/free-icon-shopping-cart-5087784.png'

function CardsInfo() {
    return (
        <div className={scss.wrapper}>
            <div className={scss.items}>
                <div className={scss.item1}>
                    <div className={scss.inner_text}>
                        <div className={scss.title}>
                            <div>
                                <img src={icon1} alt="" />
                                <span>Продаем с 2023 года</span>
                            </div>
                            <div className={scss.line}></div>
                        </div>
                        <div className={scss.text}>
                            <ul>
                                <li>Прямые поставки продукции</li>
                                <li>Заказы также принимаются</li>
                                <li>Доставка по Москве и Московской области</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={scss.item2}>
                    <div className={scss.inner_text}>
                        <div className={scss.title}>
                            <div>
                                <img src={icon2} alt="" />
                                <span>Режим работы</span>
                            </div>
                            <div className={scss.line}></div>
                        </div>
                        <div className={scss.text}>
                            <ul>
                                <li>Ежедневно с 8:30 до 18:00</li>
                                <li>МКАД 41 км наша местоположение</li>
                                <li>Большой ассортимент</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={scss.item3}>
                    <div className={scss.inner_text}>
                        <div className={scss.title}>
                            <div>
                                <img src={icon3} alt="" />
                                <span>Дополнительные услуги</span>
                            </div>
                            <div className={scss.line}></div>
                        </div>
                        <div className={scss.text}>
                            <ul>
                                <li>Плазменная резка металла</li>
                                <li>Лазерная резка металла</li>
                                <li>Гибка листового металла</li>
                                <li>Вальцовка листового металла</li>
                                <li>Трубогиб</li>
                                <li>Услуги проектировщика</li>
                                <li>Сварочные работы</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className={scss.items2}>
                <div className={scss.item4}>
                    <div className={scss.inner_text}>
                        <div className={scss.title}>
                            <div>
                                <img src={icon4} alt="" />
                                <span>Способ оплаты</span>
                            </div>
                            <div className={scss.line}></div>
                        </div>
                        <div className={scss.text}>
                            <ul>
                                <li>Оплата по факту доставки</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={scss.item5}>
                    <div className={scss.inner_text}>
                        <div className={scss.title}>
                            <div>
                                <img src={icon5} alt="" />
                                <span>Режим работы</span>
                            </div>
                            <div className={scss.line}></div>
                        </div>
                        <div className={scss.text}>
                            <ul>
                                <li>Команда проффесиональных консультантов</li>
                                <li>Услуги проектировщика</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={scss.item6}>
                    <div className={scss.inner_text}>
                        <div className={scss.title}>
                            <div>
                                <img src={icon6} alt="" />
                                <span>Разнообразие товаров</span>
                            </div>
                            <div className={scss.line}></div>
                        </div>
                        <div className={scss.text}>
                            <ul>
                                <li>Металлопрокат</li>
                                <li>Лесосклад</li>
                                <li>Хозяйственные товары</li>
                                <li>Готовые конструкции</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardsInfo