import './personalData.scss'
import { useState } from 'react'
import { useAuth } from '../../hooks/use-auth'
import imgPersonalArea from '../../assets/personalArea.png'
import imgEdit from '../../assets/edit.png'
import { useDispatch } from 'react-redux'
import { editUser } from '../../store/auth/action'
import { editUserName, editUserEmail, editUserPhone } from '../../services/firebase'
import Loader from '../../ui/Loader'
import burgerPng from '../../assets/Burger.png'

const PersonalData = () => {
  const { email, name, id, phone } = useAuth()
  const [editName, setEditName] = useState(false)
  const [userName, setUserName] = useState(name)
  const [userPhone, setUserPhone] = useState(phone)
  const [editPhone, setEditPhone] = useState(false)
  const [userEmail, setUserEmail] = useState(email)
  const [editEmail, setEditEmail] = useState(false)
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false)
  const [mobile, setMobile] = useState(true)
  const [menu, setMenu] = useState(false)

  const dispatch = useDispatch()

  const handleEditName = () => {
    setEditName(!editName)
  }

  const handleEditPhone = () => {
    setEditPhone(!editPhone)
  }

  const handleEditEmail = () => {
    setEditEmail(!editEmail)
  }

  const handleSaveUserData = () => {
    setLoading(true)
    dispatch(editUser({
      name: userName,
      phone: userPhone,
      email: userEmail
    }))
    editUserEmail(id, userEmail, setErrorMessage, setLoading)
    editUserName(id, userName)
    editUserPhone(id, userPhone)
    setEditName(false)
    setEditPhone(false)
    setEditEmail(false)
  }

  return (
    <>
      {mobile ?
        <div className="shellMenu" onClick={() => setMenu(true)}>
          <button
            className="account__sideBar-wrapper-link item"
            data-id="1"
            to="/account"
          >
            Данные пользователя
          </button>
          <img src={burgerPng} alt="close img" />
        </div> : <></>}
      <div className="personalData">
        <div className="personalData__top">
          <img src={imgPersonalArea} alt="img personal area" />
          <h2>Личные данные</h2>
        </div>

        {loading && (
          <Loader />
        )}
        <div className="personalData__wrapper">
          {errorMessage ?
            <div className="personalData__error" >{errorMessage}</div> : null
          }
          {mobile ? <span>Имя</span> : <span></span>}
          <div className="personalData__input-item">
            {mobile ? <span></span> : <span>Имя</span>}
            {editName
              ? <input
                id='name'
                type="text"
                value={userName}
                autoFocus={true}
                onChange={(event) => setUserName(event.target.value)}
              />
              : <p>{name}</p>
            }
            <button onClick={handleEditName}>
              <img src={imgEdit} alt="edit" />
            </button>
          </div>
          {mobile ? <span>Тел.</span> : <span></span>}
          <div className="personalData__input-item">
            {mobile ? <span></span> : <span>Тел.</span>}
            {editPhone
              ? <input
                type="text"
                value={userPhone}
                autoFocus={true}
                onChange={(event) => setUserPhone(event.target.value)}
              />
              : <p>{phone}</p>
            }
            <button onClick={handleEditPhone}>
              <img src={imgEdit} alt="edit" />
            </button>
          </div>
          {mobile ? <span>Email</span> : <span></span>}
          <div className="personalData__input-item">
            {mobile ? <span></span> : <span>Email</span>}
            {editEmail
              ? <input
                type="text"
                value={userEmail}
                autoFocus={true}
                onChange={(event) => setUserEmail(event.target.value)}
              />
              : <p>{email}</p>
            }
            <button onClick={handleEditEmail}>
              <img src={imgEdit} alt="edit" />
            </button>
          </div>
        </div>
        <button onClick={handleSaveUserData} className="personalData__btn-save">Сохранить</button>
      </div>
    </>
  )
}

export default PersonalData