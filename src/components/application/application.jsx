import style from './application.module.css'

export function Application () {
    return (
       <>
            <form className={style.application}>
                <div className={style.application__head}>
                    <h2 className={style.application__head__title} >Отправьте заявку</h2>
                    <p className={style.application__head__subtitle} >Мы свяжемся с Вами в ближайшее время</p>
                </div>
                <input className={style.application__input} type='text' placeholder='Имя'  required></input>
                <input className={style.application__input} type='tel' placeholder='Телефон' required></input>
                
                <textarea className={style.application__input} placeholder="Комментарий" rows={5}></textarea>

                <label className={style.application__checkbox} ><input className={style.application__checkbox__input} type='checkbox' ></input>
                Отправляя заявку Вы соглашаетесь на обработку <span>персональных данных</span></label>

                <button className={style.application__btn} type='submit'>Отправить заявку</button>
            </form>
       </> 
    )
}