import './QuestionModalWindow.scss';


export default function QuestionModalWindow () {

  return (
      <div className = 'questionModalWindow__background'>
          <div className = 'questionModalWindow__modal'>
            <div className = 'questionModalWindow__blockText'>
            <p className = 'questionModalWindow__text'>Вы уверены, что хотите</p>
            <p className = 'questionModalWindow__boldText'>отменить заявку?</p>
            </div>
            <div className = 'questionModalWindow__button_container'>
              <div className = 'questionModalWindow__button'>Не отменять</div>
              <div className = 'questionModalWindow__button'>Отменить</div>
            </div>
          </div>
      </div>
  )
}