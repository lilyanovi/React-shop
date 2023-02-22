import { NavLink } from 'react-router-dom'
import './header.scss'
import imgLogo from '../../assets/logo.png'
import imgSearch from '../../assets/search.png'

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
          <div className="header__nav-right">
            <div className="header__search">
              <img src={imgSearch} alt="img search" className="header__search-img" />
              <input type="search" placeholder="Поиск" className="header__search-input"/>
            </div>
            <NavLink to="personal"></NavLink>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header