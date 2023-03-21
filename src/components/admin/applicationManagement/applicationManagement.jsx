import { getApplicationList, writeUserApplicationStatus, writeApplicationStatusAdmin } from '../../../services/firebase'
import { useState, useEffect } from 'react'
import './applicationManagement.scss'

const ApplicationManagementAdmin = () => {
  const [list, setList] = useState({})
  const [setFilter] = useState(false);
  const [value] = useState('');

  useEffect(() => {
    getApplicationList()
      .then(data => {
        setList(data)
      })
  }, [])

  console.log(list)

  return (
    <>
      <div className='applicationManagmentAdminFilter'>
        <div className='applicationManagmentAdminFilter__title' onClick={() => setFilter(false)}>Сортировать по цене:</div>
        <div className='applicationManagmentAdminFilter__radioBox'>
          <label htmlFor="radioDown">
            <input id="radioDown" className='radio' type="radio" name="radio" value="1"
              checked={value === '1' ? true : false} />
            <span>дате</span>
          </label>
        </div>
        <div className='applicationManagmentAdminFilter__radioBox'>
          <label htmlFor="radioUp" >
            <input id="radioUp" type="radio" className='radio' name="radio" value="2"
              checked={value === '2' ? true : false} />
            <span>статусу</span>
          </label>
        </div>
      </div>
      <div className="applicationManagmentAdmin">
        {Object.keys(list).map(key => (
          <div className="applicationManagmentAdmin__item" key={key}>
            <div className="applicationManagmentAdmin__item_iner">
              <div className="applicationManagmentAdmin__item_iner-title">№ заказа</div>
              <div className="applicationManagmentAdmin__item_iner-key">{key}</div>
            </div>
            <div className="applicationManagmentAdmin__item_iner">
              <div className="applicationManagmentAdmin__item_iner-title">Дата</div>
              <div className="applicationManagmentAdmin__item_iner-key">{list[key].date}</div>
            </div>
            <div className="applicationManagmentAdmin__item_iner">
              <div className="applicationManagmentAdmin__item_iner-title">Название</div>
              <div className="applicationManagmentAdmin__item_iner-key">{list[key].card?.name}</div>
            </div>
            <div className="applicationManagmentAdmin__item_iner">
              <div className="applicationManagmentAdmin__item_iner-title">Id пользователя</div>
              <div className="applicationManagmentAdmin__item_iner-key">{list[key].userId}</div>
            </div>
            <div className="applicationManagmentAdmin__item_iner">
              <div className="applicationManagmentAdmin__item_iner-title">Имя</div>
              <div className="applicationManagmentAdmin__item_iner-key">{list[key].name}</div>
            </div>
            <div className="applicationManagmentAdmin__item_iner">
              <div className="applicationManagmentAdmin__item_iner-title">Телефон</div>
              <div className="applicationManagmentAdmin__item_iner-key">{list[key].phone}</div>
            </div>
            <div className="applicationManagmentAdmin__item_iner">
              <div className="applicationManagmentAdmin__item_iner-title">E-mail</div>
              <div className="applicationManagmentAdmin__item_iner-key">{list[key].email}</div>
            </div>
            <div className="applicationManagmentAdmin__item_iner">
              <div className="applicationManagmentAdmin__item_iner-title">Статус</div>
              <div className="applicationManagmentAdmin__item_iner-key">{list[key].status?.status}</div>
            </div>
            <div className="applicationManagmentAdmin__item_iner">
              <div className="applicationManagmentAdmin__item_iner-title">Комментарий</div>
              <div className="applicationManagmentAdmin__item_iner-key">{list[key].statusAdmin}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default ApplicationManagementAdmin