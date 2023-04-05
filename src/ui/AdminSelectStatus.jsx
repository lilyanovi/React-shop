import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { toggleQuestionModal } from '../store/modal/actions'

const AdminSelectStatus = ({ status, propsKey, id, changeStatus }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    let selectEls = document.querySelectorAll('.adminSelectStatus')
    selectEls.forEach(select => {
      if (select.value === 'В обработке') {
        select.className = 'adminSelectStatus'
      } else if (select.value === 'Отменить' || select.value === 'Удалить') {
        select.className = 'adminSelectStatus adminStatusCancel'
      } else if (select.value === 'Завершена') {
        select.className = 'adminSelectStatus adminStatusEnd'
      }
    })
  }, [status])

  const handleChangeStatus = (event) => {
    changeStatus(id, propsKey, event.target.value)
    if (event.target.value === 'Удалить') {
      dispatch(toggleQuestionModal({ show: true, key: propsKey, userId: id }))
    } else {
      dispatch(toggleQuestionModal({ show: false, key: '', userId: '' }))
    }
  }

  return (
    <select
      className="adminSelectStatus"
      value={status}
      onChange={handleChangeStatus}
    >
      <option value="В обработке">В обработке</option>
      <option value="Отменить">Отменить</option>
      <option value="Завершена">Завершена</option>
      <option value="Удалить">Удалить</option>
    </select>
  )
}

export default AdminSelectStatus