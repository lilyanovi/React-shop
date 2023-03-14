import { writeUserSubscribe, writeSubscribeList, deliteInSubscribeList, getUserValueSubscribe } from '../../services/firebase'
import { useAuth } from '../../hooks/use-auth'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setUserSubscribe } from '../../store/auth/action'

const SubscriptionManagement = () => {
  
  const { id, email, subscribe } = useAuth()
  const [subscribeStatus, setSubscribeStatus] = useState(subscribe)
  const dispatch = useDispatch()
  
  const handleSubscribeOn = (e) => {
    e.preventDefault()
    setSubscribeStatus(true)
    dispatch(setUserSubscribe({subscribe: true}))
     writeUserSubscribe(id, true) 
     writeSubscribeList(id, email)
  }

  const handleSubscribeOff = (e) => {
    e.preventDefault()
   setSubscribeStatus(false)
   dispatch(setUserSubscribe({subscribe: false}))
    writeUserSubscribe(id, false) 
    deliteInSubscribeList(id)  
  }
  
  return (
    <div className="history">
      managment
      {!subscribeStatus ?
        <button onClick={(e) => handleSubscribeOn(e)}>Подписаться</button> :
        <button onClick={(e) => handleSubscribeOff(e)}>Отменить подписку</button>
      }
      
  
    </div>
  )
}

export default SubscriptionManagement