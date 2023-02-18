import './application.scss'

export function Application () {
    return (
       <>
            <form className='application'>
                <div className='application__head'>
                    <h2 className='application__head__title' >Отправьте заявку</h2>
                    <p className='application__head__subtitle' >Мы свяжемся с Вами в ближайшее время</p>
                </div>
                <input className='application__input' type='text' placeholder='Имя'  required></input>
                <input className='application__input' type='tel' placeholder='Телефон' required></input>
                
                <textarea className='application__input' placeholder="Комментарий" rows={5}></textarea>

                <label className='application__checkbox' ><input className='application__checkbox__input}=' type='checkbox' ></input>
                Отправляя заявку Вы соглашаетесь на обработку <span>персональных данных</span></label>

                <button className='application__btn' type='submit'>Отправить заявку</button>
            </form>
       </> 
    )
}