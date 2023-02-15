import React from 'react';
import './CatalogImpressions.scss'
// import {CardButton} from './UI/button/CardButton';
import { Modal } from '../modal/modal'
import { useState } from 'react'
import Details from '../details/Details';
// import { Details } from '../details/Details';

const Card = ({ card, modal }) => {

  const [modalActive, setModalActive] = useState(false)

  return (
    <div className="card" onClick={() => modal(true)}>
      <div className="card__img">
        <img
          src={card.img}
          alt={card.title} />
      </div>
      <div className="card__block">
        <div className="card__title">{card.name}</div>
        <div className="card__body">
          <h1 className='price'>{card.price}</h1>
          <button className="cardBtn" onClick={() => modal(true)}>Заказать</button>
          <p onClick={() => setModalActive(true)}>Подробнее</p>
        </div>
      </div>
      <Modal active={modalActive} setActive={setModalActive}>
        <Details />
      </Modal>


    </div>
  );
};

export default Card;