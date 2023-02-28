import './personalData.scss'
import { useAuth } from '../../hooks/use-auth'
import imgPersonalArea from '../../assets/personalArea.png'
import imgEdit from '../../assets/edit.png'

const PersonalData = () => {
  const {email, name} = useAuth()

  return (
    <div className="personalData">
      <div className="personalData__top">
        <img src={imgPersonalArea} alt="img personal area" />
        <h2>Личные данные</h2>
      </div>
      <div className="personalData__wrapper">
        <div className="personalData__input-item">
          <span>Имя</span>
          <p>{name}</p>
          <img src={imgEdit} alt="edit" />
        </div>
        <div className="personalData__input-item">
          <span>Телефон</span>
          <p></p>
          <img src={imgEdit} alt="edit" />
        </div>
        <div className="personalData__input-item">
          <span>Email</span>
          <p>{email}</p>
          <img src={imgEdit} alt="edit" />
        </div>
      </div>
      <button className="personalData__btn-save">Сохранить</button>
    </div>
  )
}

export default PersonalData