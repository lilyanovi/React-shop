import style from './details.module.css'
import airtube from '../../assets/stocks/airtube.png'
import { Modal } from '../modal/modal'
import { Application } from '../application/application'
import { useSelector, useDispatch } from 'react-redux'
import { openModal, closeModalDetail } from '../../store/modal/actions'

export const arrDetails = [
    {
        id: 1,
        title: 'Конная прогулка',
        price: 'от 990 ₽',
        img: airtube
    }
]

const Details = () => {
    const modalShow = useSelector(store => store.modal.modalShow)

    const dispatch = useDispatch()

    const handleOpenModal = (event) => {
        event.preventDefault()
        dispatch(openModal(true))
        dispatch(closeModalDetail(false))
    }

    return (
        <>
            {
                arrDetails.map(item => (
                    <form className={style.details}>
                        <div className={style.details__info}>
                            <div className={style.details__img}>
                                <div>
                                    <img src={item.img} alt="img" />
                                </div>
                                <div></div>
                            </div>
                            <div className={style.details__description}>
                                <div className={style.details__head}>
                                    <h2 className={style.details__head__title} >{item.title}</h2>
                                    <h1 className={style.details__price} >{item.price}</h1>
                                </div>

                                <button className={style.details__btn} onClick={(event) => handleOpenModal(event)}>Заказать впечатление</button>
                                <h3 className={style.details__head__subtitle}> Подробнее о впечатлении: </h3>
                            </div>
                        </div>
                    </form>
                ))
            }
            {
                modalShow &&
                <Modal>
                    <Application />
                </Modal>
            }
        </>
    )
}

export default Details