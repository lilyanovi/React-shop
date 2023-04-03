import { getSubscribeList, deliteInSubscribeList, writeUserSubscribe  } from '../../../services/firebase'
import { useState, useEffect } from 'react'
import './subscriptionManagementAdmin.scss'


const SubscriptionManagementAdmin = () => {
  const [list, setList] = useState({})

useEffect(() => {
    getSubscribeList()
      .then(data => {
        if (Object.keys(data).length !== 0)
       {setList(data)}
      })
  }, [])
 
  const deleteSubscribe = (key) => {
    deliteInSubscribeList(key)
    writeUserSubscribe(key, false)
    const newList = {...list}
    delete newList[key]
    setList(newList)
  }
  // console.log(Object.keys(list).length)
   return (
      <>
        {(Object.keys(list).length !== 0) ?
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
                <button className="box-status__button_del" onClick={() => deleteSubscribe(key)}>Удалить</button>
              </div>
            </div>
            </div>
          ))
        } </div> :
          <div className="subscription__no" >
          <p className="subscription__no__title" >У&nbsp;вас ещё нет подписок(</p>
        </div>
        }
          
        
      </>
    )
  }

  export default SubscriptionManagementAdmin