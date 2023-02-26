import { NavLink } from 'react-router-dom'
import './header.scss'
import imgLogo from '../../assets/logo.png'
import imgSearch from '../../assets/search.png'
import { useAuth } from '../../hooks/use-auth'

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
  const {isAuth} = useAuth();
  
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
            {isAuth ?
              <div className="header__auth">
                <NavLink to='/account'></NavLink>
              </div>

              :
              <div className="header__auth"> 
                <NavLink to='/login'></NavLink>
              </div>
            }
          </div>
        </div>
      </header>
    </>
  )
}

export default Header