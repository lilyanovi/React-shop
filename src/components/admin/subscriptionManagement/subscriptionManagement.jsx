import { getSubscribeList } from '../../../services/firebase'
import { useState, useEffect } from 'react'
import './subscriptionManagementAdmin.scss'


const SubscriptionManagementAdmin = () => {
  const [list, setList] = useState({})

useEffect(() => {
    getSubscribeList()
      .then(data => {
        setList(data)
      })
  }, [])
 
    return (
      <>
        <div className="subscription-contain">

          {Object.keys(list).map((key, i) => (
            <div className="subscription-box" key={key}>
            <div className="box-name">
              <div className="box-name__title">Имя</div>
              <div className="box-name__info">{list[key].name}</div>
            </div>
            <div className="box-email">
              <div className="box-email__title">E-mail</div>
                <div className="box-email__info">{list[key].email}</div>
            </div>
            <div className="box-status">
              <div className="box-status__title"></div>
              <div className="box-status__button">
                <button className="box-status__button_del">Удалить</button>
              </div>
            </div>
            </div>
          ))}
          
        </div>
      </>
    )
  }

  export default SubscriptionManagementAdmin