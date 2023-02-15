import './footer.scss'
import insta from '../../assets/footer/insta.png'
import vk from '../../assets/footer/vk.png'
import flogo from '../../assets/footer/flogo.png'
import { NavLink } from 'react-router-dom'

const links = [
  {
    id: 1,
    name: 'Каталог',
    to: '/'
  },
  {
    id: 2,
    name: 'Акции',
    to: 'stock'
  },
  {
    id: 3,
    name: 'Контакты',
    to: 'contacts'
  }
]

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer__box container">
          <hr />
          <div className="footer__row">
            <div className="footer__column">
              <img src={flogo} alt="flogo" />
              <p className="footer__column-allright">Все права защищены<br />
                © Дари Душой, 2022 г.
              </p>
            </div>

            <div className="footer__column">
              <h2>Меню</h2>
              <div className="footer__column-nav">
                {links.map(link => (
                  <NavLink
                    to={link.to}
                    key={link.id}
                    style={({ isActive }) => ({
                      color: isActive ? '#547147' : '#333333'
                    })}
                  >
                    {link.name}
                  </NavLink>
                ))
                }</div>
            </div>

            <div className="footer__column">
              <h1>+7 (999) 123-45-67</h1>
              <div className="footer__column-link">
                <img src={vk} alt="vk" />
                <img src={insta} alt="insta" />
              </div>
            </div>

            <div className="footer__column">
              <h1>Остались вопросы?</h1>
              <p className="footer__column-text">Оставьте заявку, мы свяжемся с Вами <br /> в ближайшее время</p>
              <button onClick="">Оставить заявку</button>
            </div>

          </div>
        </div>
      </footer> </>)
}

export default Footer