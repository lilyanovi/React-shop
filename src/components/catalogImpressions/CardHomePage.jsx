import React from 'react';
import style from './CatalogHomePage.module.scss'
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
    <div className={style.card} onClick={() => cardId(card.id)}>
      <div className={style.card__img}
      onClick={handleOpenDetails}>
        <img
          src={card.img}
          alt={card.title} />
      </div>
      <div className={style.card__block}>
        <div className={style.card__title} onClick={handleOpenDetails}>
          {card.name}
        </div>
        <div className={style.card__body}>
          <h1 className={style.price}>{card.price}₽</h1>
           <button className={style.cardBtn} onClick={handleOpenModal}>Заказать</button>
          <p onClick={handleOpenDetails}>Подробнее</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
