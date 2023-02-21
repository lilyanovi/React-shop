import React from 'react';
import './CatalogImpressions.scss'


const Card = ({ card, modal1, modal2, cardId }) => {

  return (
    <div className="card">
      <div className="card__img"
      onClick={() => {
        cardId(card.id)
        modal2(true)}}>
        <img
          src={card.img}
          alt={card.title} />
      </div>
      <div className="card__block">
        <div className="card__title"
        onClick={() => {
        cardId(card.id)
        modal2(true)}}>
          {card.name}
        </div>
        <div className="card__body">
          <h1 className='price'>{card.price}</h1>
          <button className="cardBtn" onClick={() => modal1(true)}>
            Заказать
          </button>
          <p onClick={() => {
            cardId(card.id)
            modal2(true)}}>
          Подробнее
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;