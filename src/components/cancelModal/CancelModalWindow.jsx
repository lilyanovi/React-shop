import './CancelModalWindow.scss';
import close from '../../assets/close.png'
import { Link } from 'react-router-dom'

export default function CancelModalWindow () {

  return (
      <div className = 'background'>
          <div className = 'modal'>
            <div>
              <img src = {close} alt = 'close' className = 'close'></img>
            </div>
            <p className = 'text'>Ваша заявка <span className = 'boldText'>отменена!</span></p>
            <Link className = 'hrefText' to='/catalog'>Перейти в каталог</Link>
          </div>
      </div>
  )
}