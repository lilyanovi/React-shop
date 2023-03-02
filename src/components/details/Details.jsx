import style from './details.module.scss'
//import horseWalk from '../../assets/slider/horseWalk.png'
import { Modal } from '../modal/modal'
import { Application } from '../application/application'
import { useSelector, useDispatch } from 'react-redux'
import { openModal, closeModalDetail } from '../../store/modal/actions'

// export const arrDetails = [
//     {
//         id: 1,
//         title: 'Конная прогулка',
//         price: 'от 990 ₽',
//         img: horseWalk
//     }
// ]


const Details = ({card}) => {

    const modalShow = useSelector(store => store.modal.modalShow)
    const dispatch = useDispatch()
    const handleOpenModal = (event) => {
        event.preventDefault()
        dispatch(openModal(true))
        dispatch(closeModalDetail(false))
    }

    return (
       <>
        <div className={style.details} key={card.id}>
            <div className={style.details__images}>
                <img className={style.details__images_img} src={card.img} alt="img" />
                <div className={style.details__images_mini}>
                    <img className={style.details__images_img_mini} src={card.img} alt="img" />
                    <img className={style.details__images_img_mini} src={card.img} alt="img" />
                    <img className={style.details__images_img_mini} src={card.img} alt="img" />
                </div>
            </div>
            <div className={style.details__body}>
                <h2 className={style.details__body_title} >{card.name.toUpperCase()}</h2>
                <div className={style.details__selectionPrice}>
                    <h1 className={style.details__price} >{card.price} ₽</h1>
                    {/* <button className={style.details__selection}>Менять описание</button> */}
                </div>
                <button className={style.details__btn} onClick={(event) => handleOpenModal(event)}>Заказать впечатление</button>
                <div className={style.details__description}>
                    <h3>Подробнее о впечатлении: </h3>
                    {card.desc}
                </div>
            </div>
        </div>
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