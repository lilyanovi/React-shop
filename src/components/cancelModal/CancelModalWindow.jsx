import './CancelModalWindow.scss';
import close from '../../assets/close.png'
import { Link } from 'react-router-dom'
import { toggleDeleteModal } from '../../store/modal/actions'
import { useDispatch } from 'react-redux'

export default function CancelModalWindow () {
  const dispatch = useDispatch()

  const handleCloseModal = () => {
    dispatch(toggleDeleteModal(false))
  }

  return (
      <div className = 'cancelModal__background' onClick={handleCloseModal}>
          <div className = 'cancelModal__modal'>
            <div>
              <img src = {close} alt = 'close' className = 'cancelModal__close'></img>
            </div>
            <p className = 'cancelModal__text'>Ваша заявка <span className = 'cancelModal__boldText'>отменена!</span></p>
            <Link className = 'cancelModal__hrefText' to='/catalog'>Перейти в каталог</Link>
          </div>
      </div>
  )
}