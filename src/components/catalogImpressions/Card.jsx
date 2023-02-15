import React from 'react';
import './CatalogImpressions.scss'
// import {CardButton} from './UI/button/CardButton';

const Card = ({card, modal}) => {

 return (
  <div className="card" onClick={() => modal(true)}>
    <div className="card__img">
    <img
     src={card.img}
     alt={card.title}/>
     </div>
    <div className="card__block">
       <div className="card__title">{card.name}</div>
       <div className="card__body">
        <h1 className='price'>{card.price}</h1>
        <button className="cardBtn" onClick={() => modal(true)}>Заказать</button>
        <p>Подробнее</p>
        </div>
    </div>
    
   
  </div>
 );
};

export default Card;