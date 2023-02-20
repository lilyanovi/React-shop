import { NavLink } from 'react-router-dom'
import './header.scss'
import imgLogo from '../../assets/logo.png'

//предлагаю этот массив импортировать в футер, чтобы не дублировать код для навигации
export const links = [
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

const Header = () => {

const user = false;

  return (
    <>
      <header className="header">
        <div className="header__nav container">
          <NavLink to="/" className="header__nav-logo">
            <img src={imgLogo} alt="logo" height="64"/>
          </NavLink>
          <nav>
            {
              links.map(link => (
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
            }
          </nav>
          {user ?
            <div>
              <NavLink to='/account'>
                <button>Личный кабинет</button>
              </NavLink>
              <button>Выйти</button>
            </div>
          
            :
            <NavLink to='/login'>
              <button>Войти</button>
            </NavLink>
          }
          
          
        </div>
      </header>
    </>
  )
}

export default Header