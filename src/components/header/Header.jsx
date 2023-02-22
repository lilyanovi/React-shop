import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import './header.scss'
import imgLogo from '../../assets/logo.png'
import imgSearch from '../../assets/search.png'

import { removeUser } from '../../store/auth/action'
import { useAuth } from '../../hooks/use-auth'
import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth'



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

<<<<<<< HEAD
  const {isAuth} = useAuth();
  const auth = getAuth();
  
  const dispatch = useDispatch();
  const navigate = useNavigate()

  /*onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log(`${uid} активен`)
    } else {
      console.log('Не активен')
    }
  });
*/

  const handleLogOut = (e) => {
    e.preventDefault();

    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        navigate('/login');
        console.log('Пользователь не авторизован');
    }).catch ((error) => {
      console.log(error)
    })
    
  }

=======
>>>>>>> 08e43c021d676ade685410da0379529a02bafb8c
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
          {isAuth ?
            <div>
              <NavLink to='/account'>
                <button>Личный кабинет</button>
              </NavLink>
              <button onClick={(e) => handleLogOut(e)}>Выйти</button>
            </div>
          
            :
            <div> 
              <NavLink to='/login'>
                <button>Войти</button>
              </NavLink>
              <NavLink to='/signup'>
                <button>Зарегестрироваться</button>
              </NavLink>
            </div>
          }
          
          
        </div>
      </header>
    </>
  )
}

export default Header