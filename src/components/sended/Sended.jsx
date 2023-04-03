import './sended.scss'
import goodSend from '../../assets/goodSend.png'
import imgLogo from '../../assets/logo.png'
import { useDispatch } from 'react-redux'
import { closeModalSended } from '../../store/modal/actions'

const Sended = () => {
  const dispatch = useDispatch()

  const handleCloseModal = () => {
    dispatch(closeModalSended(false))
  }

  return (
    <div className="sended">
      <img src={goodSend} alt="good send" />
      <div className="sended__text">
        <p className="sended__text-normal">Ваша заявка</p>
        <p className="sended__text-bold">успешно отправлена</p>
      </div>
      <p className="sended__info">Мы свяжемся с Вами в ближайшее время</p>
      <img src={imgLogo} alt="img logo" height="58" className="sended__logo" />
      <div class="sended-closebtn" onClick={handleCloseModal}>
      </div>
    </div>
  )
}

export default Sended