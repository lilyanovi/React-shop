import { useSelector, useDispatch } from 'react-redux'
import './completedApplications.scss'
import SelectStatus from '../../ui/SelectStatus'
import { addAuthApplications } from '../../store/auth/action'
import { writeUserApplicationStatus } from '../../services/firebase'
import { useAuth } from '../../hooks/use-auth'
import deleteImg from '../../assets/delete.png'

const CompletedApplications = () => {
  const applications = useSelector(store => store.user.applications)
  const dispatch = useDispatch()
  const { id } = useAuth()

  const changeStatus = (status, key) => {
    let copy = Object.assign({}, applications)
    copy[key].status = status
    dispatch(addAuthApplications(copy))
    const idApplication = [key]
    writeUserApplicationStatus(id, idApplication, status)
  }

  return (
    <div className="completed">
      {
        Object.keys(applications).map(key => (
          <div
          className={ applications[key].status === 'Отменить'
            ? "completed__item completed-delete"
            : "completed__item"
          }
          key={applications[key].card.id}
          >
            <div className="completed__item-left">
              <img src={applications[key].card.img} alt="some img" height="84"/>
              <div className="completed__item-desc">
                <p>Название заявки: <span>{applications[key].card.name}</span></p>
                <p>Дата заявки: <span>{applications[key].date}</span></p>
                <p>Номер заказа: <span>{key}</span></p>
              </div>
            </div>
            <div className="completed__item-right">
              { applications[key].status === 'Отменить'
                ? <button className="completed__info-delete">
                    <span>Удалить заявку</span>
                    <img src={deleteImg} alt="delete img" height="20"/>
                  </button>
                : <h3 className="completed__info">Подробнее</h3>
              }
              <div className="completed__item-status">
                <h4 className={ applications[key].status === 'Отменить'
                  ? 'completed__item-status-text completed__delete-text'
                  : 'completed__item-status-text'
                }
                >Статус заявки: </h4>
                <SelectStatus propsKey={key} changeStatus={changeStatus}/>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default CompletedApplications