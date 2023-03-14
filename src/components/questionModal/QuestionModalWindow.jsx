import './QuestionModalWindow.scss';


export default function QuestionModalWindow () {

  return (
      <div className = 'background'>
          <div className = 'modal'>
            <div className = 'blockText'>
            <p className = 'text'>Вы уверены, что хотите</p>
            <p className = 'boldText'>отменить заявку?</p>
            </div>
            <div className = 'button_container'>
              <div className = 'button'>Не отменять</div>
              <div className = 'button'>Отменить</div>
            </div>
          </div>
      </div>
  )
}