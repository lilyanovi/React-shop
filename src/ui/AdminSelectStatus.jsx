import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addAuthApplications } from '../store/auth/action'
import { writeUserApplicationStatus } from '../services/firebase'

const AdminSelectStatus = ({ status, propsKey, id }) => {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    let selectEls = document.querySelectorAll('.adminSelectStatus')
    selectEls.forEach(select => {
      if (select.value === 'В обработке') {
        select.className = 'adminSelectStatus'
      } else if (select.value === 'Отменить') {
        select.className = 'adminSelectStatus adminStatusCancel'
      } else if (select.value === 'Завершена') {
        select.className = 'adminSelectStatus adminStatusEnd'
      }
    })
  }, [status])

  const handleChangeStatus = (event) => {
    setValue(event.target.value)
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
    </select>
  )
}

export default AdminSelectStatus