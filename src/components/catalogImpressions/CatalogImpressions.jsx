import React, {useState, useEffect} from 'react';
import Card from './Card';
import './CatalogImpressions.scss'
import { Modal } from '../modal/modal';
import { Application } from '../application/application';
import Det from '../details/Det';
import axios from 'axios'

const CatalogImpressions = () => {

  const [modalActive1, setModalActive1] = useState(false)
  const [modalActive2, setModalActive2] = useState(false)
  const [cards, setCards] = useState([])
  const [cardModal, setCardModal] = useState('')

  useEffect (() => {
    fetchCards()
  }, []
  )
  async function fetchCards() {
    const cards = await axios.get('https://kaori318.github.io/givesoul/src/cards.json')
    setCards(cards.data)
  }
  function getCardId(cardId) {
  const id = cardId;
    let index = cards.findIndex(el => el.id === id);
    setCardModal(cards[index])
  }

 return (
  <div className="catalogImpressions">
    <h1 className="title">
      Каталог впечатлений
    </h1>
    <div className="catalogCard">
    {cards.map(card => <Card modal1={setModalActive1} modal2={setModalActive2} card={card} cardId={getCardId} key={card.id}/>)}
    </div>
    <Modal active={modalActive1} setActive={setModalActive1}>
        <Application />
    </Modal>
    <Modal active={modalActive2} setActive={setModalActive2}>
        <Det card={cardModal}/>
    </Modal>
  </div>
 );
};

export default CatalogImpressions;