import React from 'react';
import './CatalogImpressions.scss'
import { useDispatch } from 'react-redux'
import { openModal, openModalDetail } from '../../store/modal/actions'



const Card = ({ card, setInfo, cardId }) => {

  const dispatch = useDispatch()
  const handleOpenModal = () => {
    dispatch(openModal(true))
  }
  const handleOpenDetails = () => {
    dispatch(openModalDetail(true))
  }

  return (
    <div className="card">
      <div className="card__img"
      onClick={() => {
        cardId(card.id)
        handleOpenDetails}}>
        <img
          src={card.img}
          alt={card.title} />
      </div>
      <div className="card__block">
        <div className="card__title"
        onClick={() => {
        cardId(card.id)
        handleOpenDetails}}>
          {card.name}
        </div>
        <div className="card__body">
          <h1 className='price'>{card.price}</h1>
           <button className="cardBtn" onClick={handleOpenModal}>Заказать</button>
          <p onClick={() => {
            cardId(card.id)
           handleOpenDetails}}>
          Подробнее
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;