import { useSelector, useDispatch } from 'react-redux'
import './completedApplications.scss'
import SelectStatus from '../../ui/selectStatus/SelectStatus'
import { addAuthApplications } from '../../store/auth/action'
import { writeUserApplicationStatus } from '../../services/firebase'
import { useAuth } from '../../hooks/use-auth'

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
          <div className="completed__item" key={applications[key].card.id}>
            <div className="completed__item-left">
              <img src={applications[key].card.img} alt="some img" height="84"/>
              <div className="completed__item-desc">
                <p>Название заявки: <span>{applications[key].card.name}</span></p>
                <p>Дата заявки: <span>{applications[key].date}</span></p>
                <p>Номер заказа: <span>{key}</span></p>
              </div>
            </div>
            <div className="completed__item-right">
              <h3>Подробнее</h3>
              <div className="completed__item-status">
                <h4>Статус заявки: </h4>
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