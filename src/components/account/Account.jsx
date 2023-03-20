import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import './account.scss'
import { getAuth, signOut } from 'firebase/auth'
import { useDispatch, useSelector } from 'react-redux'
import { removeUser } from '../../store/auth/action'
import QuestionModalWindow from '../questionModal/QuestionModalWindow'
import CancelModalWindow from '../cancelModal/CancelModalWindow'
import { useAuth } from '../../hooks/use-auth'

const Account = () => {
  const auth = getAuth();
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const modalQuestion = useSelector(store => store.modal.modalQuestion.show)
  const modalDelete = useSelector(store => store.modal.modalDelete)
  const {isAdmin} = useAuth()

  if (isAdmin) {
    navigate('/admin')
  }

  const handleLogOut = event => {
    event.preventDefault()

    signOut(auth)
      .then(() => {
        dispatch(removeUser())
        localStorage.removeItem('remember')
        navigate('/login')
      }).catch(error => {
        console.log(error)
      })
  }

  return (
    <div className="account container">
      <h1>Личный кабинет</h1>
      <div className="account__box">
        <div className="account__sideBar">
          <div className="account__sideBar-wrapper">
            <NavLink
              className="account__sideBar-wrapper-link-active"
              to="/account"
            >
              Данные пользователя
            </NavLink>
            <NavLink
              className="account__sideBar-wrapper-link-active"
              to="completed"
            >
              Оформленные заявки
            </NavLink>
            <NavLink
              className="account__sideBar-wrapper-link-active"
              to="managment"
            >
              Управление подпиской
            </NavLink>
            <NavLink
              className="account__sideBar-wrapper-link-active"
              to="comment"
            >
              Оставить отзыв
            </NavLink>
            <button
            className="account__sideBar-btn-exit"
            onClick={(e) => handleLogOut(e)}
            >
              Выйти
            </button>
          </div>
        </div>
        <Outlet/>
      </div>
      { modalQuestion && <QuestionModalWindow/> }
      { modalDelete && <CancelModalWindow/> }
    </div>
  )
}

export default Account