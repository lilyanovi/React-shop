import './application.scss'
import { useState } from 'react'
import { nanoid } from 'nanoid'
import { useDispatch, useSelector } from 'react-redux'
import { addApplication } from '../../store/applications/actions'
import { closeModal, openModalSended } from '../../store/modal/actions'
import { Modal } from '../modal/modal'
import Sended from '../sended/Sended'
import { writeApplicationWithoutLogin, writeUserApplication, writeUserApplicationStatus, applicationsWithAuth } from '../../services/firebase'
import { useAuth } from '../../hooks/use-auth'
import { addAuthApplications } from '../../store/auth/action'

export function Application () {
    const { isAuth, id } = useAuth()
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [commit, setCommit] = useState('')
    const idApplication = nanoid()
    const modalSended = useSelector(store => store.modal.modalSended)
    const card = useSelector(store => store.card)
    const userName = useSelector(store => store.user.name)
    const userPhone = useSelector(store => store.user.phone)

    const getDate = () => {
        const currentDate = new Date()
        let day = currentDate.getDate()
        let month = currentDate.getMonth() + 1
        const year = currentDate.getFullYear()
        if (day < 10) {
            day = `${'0' + day}`
        }
        if (month < 10) {
            month = `${'0' + month}`
        }
        return `${day}.${month}.${year}`
    }

    const dispatch = useDispatch()

    const codeDuplication = () => {
        setName('')
        setPhone('')
        setCommit('')
        dispatch(closeModal(false))
        dispatch(openModalSended(true))
    }
    
    const handleSubmit = event => {
        event.preventDefault()
        if (!isAuth) {
            if (name !== '' &&  phone !== '') {
                let applicationObj = {
                    [idApplication]: {
                        name,
                        phone,
                        commit,
                        card
                    }
                }
                
                dispatch(addApplication(applicationObj))
                codeDuplication()
                writeApplicationWithoutLogin(idApplication, name, phone, commit, card)
            } else {
                return
            }
        } else {
           let applicationObj = {
                [idApplication]: {
                    card,
                    status: 'В обработке',
                    date: getDate()
                }
           }
        
           const date = getDate()
           const status = 'В обработке'
           dispatch(addAuthApplications(applicationObj))
           codeDuplication()
           writeUserApplication(id, idApplication, name, phone, commit, card, date) 
           writeUserApplicationStatus(id, idApplication, status)
        }
    }

    return (
       <>
            <form className='application' onSubmit={(event) => handleSubmit(event)}>
                <div className='application__head'>
                    <h2 className='application__head__title' >Отправьте заявку</h2>
                    <p className='application__head__subtitle' >Мы свяжемся с Вами в ближайшее время</p>
                </div>
                { isAuth
                    ? <p className="application__user-text">{userName ? userName : 'Имя'}</p>
                    : <input
                        className='application__input'
                        type='text'
                        placeholder='Имя' 
                        required
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    ></input>
                }
                { isAuth
                    ? <p className="application__user-text">{userPhone ? userPhone : 'Телефон'}</p>
                    : <input
                        className='application__input'
                        type='tel'
                        placeholder='Телефон'
                        required
                        value={phone}
                        onChange={(event) => setPhone(event.target.value)}
                    ></input>
                }
                
                <textarea
                    className='application__input'
                    placeholder="Комментарий"
                    rows={5}
                    value={commit}
                    onChange={(event) => setCommit(event.target.value)}
                ></textarea>

                <label className='application__checkbox' ><input className='application__checkbox__input}=' type='checkbox' ></input>
                Отправляя заявку Вы соглашаетесь на обработку <span>персональных данных</span></label>

                <button className='application__btn' type='submit'>Отправить заявку</button>
            </form>
            {
                modalSended &&
                <Modal>
                    <Sended/>
                </Modal>
            }
       </> 
    )
}