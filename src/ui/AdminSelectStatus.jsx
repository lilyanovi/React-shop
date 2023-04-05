import { useEffect } from 'react'

const AdminSelectStatus = ({ status, propsKey, id, changeStatus }) => {

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
    changeStatus(id, propsKey, event.target.value)
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