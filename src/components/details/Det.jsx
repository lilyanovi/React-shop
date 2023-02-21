import React from 'react';
import style from './details.module.css'

const Det = ({card}) => {
 return (
  <form className={style.details}>
                        <div className={style.details__head}>
                            <h2 className={style.details__head__title} >{card.name}</h2>
                            <h1 className={style.details__price} >{card.price}</h1>
                        </div>
                        <button className={style.details__btn}>
                          Заказать впечатление</button>
                        <img src={card.img} alt="img" />
                        <p> Тут будет добавлена подробная информация </p>
                    </form>
 );
};
export default Det;