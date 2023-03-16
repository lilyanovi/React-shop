import './subscriptionManagement.scss'
import picture from '../../assets/subscriptionManagement/picture subscr.png'
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
    dispatch(setUserSubscribe({ subscribe: true }))
    writeUserSubscribe(id, true)
    writeSubscribeList(id, email)
  }

  const handleSubscribeOff = (e) => {
    e.preventDefault()
    setSubscribeStatus(false)
    dispatch(setUserSubscribe({ subscribe: false }))
    writeUserSubscribe(id, false)
    deliteInSubscribeList(id)
  }

  return (
    <div className="history">
      <div className="info">
        <img src={picture} alt="#" />
        <p className="text-info">Подписавшись на рассылку, Вы всегда будете в курсе самых <span className='span-info'> выгодных акций!</span></p>
        {!subscribeStatus ?
          <button className='button-subscribe' onClick={(e) => handleSubscribeOn(e)}>Подписаться</button> :
          (<div className="message-subscribe_box">
            <p className="message-info">Вы подписаны</p>
            <button className='button-subscribe' onClick={(e) => handleSubscribeOff(e)}>Отписаться</button>
          </div>)
        }

      </div>
    </div>
  )
}

export default SubscriptionManagement