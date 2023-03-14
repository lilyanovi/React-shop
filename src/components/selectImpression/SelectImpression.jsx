import './selectImpression.scss'
import arrowImg from '../../assets/arrowDown.png'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectCard } from '../../store/card/actions'

const SelectImpression = () => {

  const [showSelect, setShowSelect] = useState(false)
  const [cards, setCards] = useState([])
  const [value, setValue] = useState(null)
  const card = useSelector(store => store.card)

  const dispatch = useDispatch()

  useEffect(() => {
    fetch('https://kaori318.github.io/site/cards.json')
      .then(response => response.json())
      .then(data => {
        let arr = []
        for (let el of data) {
          if (!arr.includes(el.name)) {
            arr.push(el.name)
          }
        }
        let result = []
        for (let i = 0; i < arr.length; i++) {
          result.push(data[i])
        }
        setCards(result)
      })
  }, [])

  const handleShowSelect = () => {
    setShowSelect(!showSelect)
  }

  const handleChange = (event, card) => {
    setValue(+event.target.value)
    let id = event.target.id
    let boxEls = document.querySelectorAll('.selectImpression__item-box')
    dispatch(selectCard(card))
    for (let box of boxEls) {
      if (box.dataset.id !== id) {
        box.classList.remove('selectImpression__box-checked')
      } else {
        box.classList.add('selectImpression__box-checked')
      }
    }
  }

  return (
    <div className="selectImpression">
      <div className="selectImpression__main" onClick={handleShowSelect}>
        { card.name !== undefined ? <p>{card.name}</p> : <p>Выбрать впечаление</p>}
        <img
          src={arrowImg}
          alt="arrow down"
          height="26"
          className={!showSelect
            ? 'selectInpression__arrow'
            : 'selectInpression__arrow selectImpression__arrow-rotate'}
        />
      </div>
      { showSelect && 
        <div className="selectImpression__list">
          {
            cards.map(card => (
              <div className="selectImpression__item" key={card.id}>
                <input
                  type="radio"
                  name="radio"
                  className="selectImpression__input"
                  id={card.id}
                  value={card.id}
                  checked={value !== +card.id ? false : true}
                  onChange={(event => handleChange(event, card))}
                />
                <label htmlFor={card.id} className="selectImpression__label">
                  <div className="selectImpression__label-info-card">
                    <img src={card.img} alt="card img" height="30"/>
                    <p>{card.name}</p>
                  </div>
                  <div className="selectImpression__item-box" data-id={card.id}></div>
                </label>
              </div>
            ))
          }
        </div>
      }
    </div>
  )
}

export default SelectImpression