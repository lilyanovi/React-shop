import './successModalWindow.scss';
import close from '../../assets/close.png'
import goodSend from '../../assets/goodSend.png'
import logo from '../../assets/logo.png'

export default function ModalWindow () {

  return (
      <div className = 'background'>
          <div className = 'modal'>
            <div>
              <img src = {close} alt = 'close' className = 'close'></img>
            </div>
            <img src = {goodSend} alt = 'success' className = 'success'></img>
            <div className = 'blockText'>
            <p className = 'text'>Вы успешно</p>
            <p className = 'boldText'>зарегистрировались!</p>
            </div>
            <img src = {logo} alt = 'logo' className = 'logo'></img>
          </div>
      </div>
  )
}