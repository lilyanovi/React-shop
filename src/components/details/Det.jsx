import React from 'react';
import style from './details.module.css'
import { Modal } from '../modal/modal'
import { Application } from '../application/application'
import { useState } from 'react'

const Det = ({card, modal1, modal2}) => {
  const [modalActive, setModalActive] = useState(false)

 return (
  <>
  <form className={style.details}>
  <div style={{display:'flex'}}>
    <div className={style.images}>
    <img src={card.img} alt="img"/>
    </div>
    <div className={style.details__head}>
                            <h2 className={style.details__head__title} >{card.name}</h2>
                            <h1 className={style.details__price} >{card.price}</h1>
                        </div>
                        <button className={style.details__btn}
                        onClick={()=> setModalActive(true)}>
                      
                          Заказать впечатление</button>
                       
                        <p> Тут будет добавлена подробная информация </p>
               
  </div>
  </form>
  <Modal active={modalActive} setActive={setModalActive}>
  <Application />
</Modal>
  </>
 );
};
export default Det;