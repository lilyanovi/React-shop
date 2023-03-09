import './personalData.scss'
import { useState } from 'react'
import { useAuth } from '../../hooks/use-auth'
import imgPersonalArea from '../../assets/personalArea.png'
import imgEdit from '../../assets/edit.png'
import { useDispatch, useSelector } from 'react-redux'
import { editUser } from '../../store/auth/action'

const PersonalData = () => {
  const {email, name} = useAuth()
  const [editName, setEditName] = useState(false)
  const [userName, setUserName] = useState(name)
  const phone = useSelector(store => store.user.phone)
  const [userPhone, setUserPhone] = useState(phone)
  const [editPhone, setEditPhone] = useState(false)

  const dispatch = useDispatch()

  const handleEditName = () => {
    setEditName(!editName)
  }

  const handleEditPhone = () => {
    setEditPhone(!editPhone)
  }

  const handleSaveUserData = () => {
    dispatch(editUser({
      name: userName,
      phone: userPhone
    }))
    setEditName(false)
    setEditPhone(false)
  }

  return (
    <div className="personalData">
      <div className="personalData__top">
        <img src={imgPersonalArea} alt="img personal area" />
        <h2>Личные данные</h2>
      </div>
      <div className="personalData__wrapper">
        <div className="personalData__input-item">
          <span>Имя</span>
          { editName
            ? <input
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
        <div className="personalData__input-item">
          <span>Телефон</span>
          { editPhone
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
        <div className="personalData__input-item">
          <span>Email</span>
          <p>{email}</p>
          <img src={imgEdit} alt="edit" />
        </div>
      </div>
      <button onClick={handleSaveUserData} className="personalData__btn-save">Сохранить</button>
    </div>
  )
}

export default PersonalData