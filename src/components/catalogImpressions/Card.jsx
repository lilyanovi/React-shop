import React from 'react';
import './CatalogImpressions.scss'


const Card = ({ card, modal1, modal2 }) => {

  return (
    <div className="card">
      <div className="card__img" onClick={() => modal2(true)}>
        <img
          src={card.img}
          alt={card.title} />
      </div>
      <div className="card__block">
        <div className="card__title"  onClick={() => modal2(true)}>{card.name}</div>
        <div className="card__body">
          <h1 className='price'>{card.price}</h1>
          <button className="cardBtn" onClick={() => modal1(true)}>Заказать</button>
          <p  onClick={() => modal2(true)}>Подробнее</p>
        </div>
      </div>
    </div>
  );
};

export default Card;