import './QuestionModalWindow.scss';
import { useDispatch, useSelector } from 'react-redux'
import { toggleQuestionModal, toggleDeleteModal } from '../../store/modal/actions'
import { deleteAuthApplication } from '../../store/auth/action'
import { useAuth } from '../../hooks/use-auth'
import { deliteUserApplication } from '../../services/firebase'

export default function QuestionModalWindow () {
  const key = useSelector(store => store.modal.modalQuestion.key)
  const { id } = useAuth()

  const dispatch = useDispatch()

  const handleCloseModal = () => {
    dispatch(toggleQuestionModal({ show: false, key: ''}))
  }

  const handleClick = event => {
    event.stopPropagation()
  }

  const handleDeleteItem = () => {
    dispatch(deleteAuthApplication(key))
    deliteUserApplication(id, key)
    dispatch(toggleQuestionModal({ show: false, key: ''}))
    dispatch(toggleDeleteModal(true))
  }

  return (
      <div className = 'questionModalWindow__background' onClick={handleCloseModal}>
          <div className = 'questionModalWindow__modal' onClick={(event) => handleClick(event)}>
            <div className = 'questionModalWindow__blockText'>
            <p className = 'questionModalWindow__text'>Вы уверены, что хотите</p>
            <p className = 'questionModalWindow__boldText'>отменить заявку?</p>
            </div>
            <div className = 'questionModalWindow__button_container'>
              <div className = 'questionModalWindow__button' onClick={handleCloseModal}>Не отменять</div>
              <div className = 'questionModalWindow__button' onClick={handleDeleteItem}>Отменить</div>
            </div>
          </div>
      </div>
  )
}