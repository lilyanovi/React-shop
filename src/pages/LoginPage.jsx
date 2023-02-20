import { NavLink } from "react-router-dom"


const LoginPage = () => {
    return (
      <>
      <section className="container">
        <h1>LoginPage</h1>
        <div>
            <input type="email" required/>
            <input type="password" required/>
            <button type="submit">Войти</button>
        </div>
        <div>
            <button>Войти с помощью Google</button>
        </div>
        <div>
            <p>Нет учётной записи?</p>
            <NavLink to='/signup'>Зарегестрироваться</NavLink>
        </div>
        </section>
      </>
    )
  }
  
  export default LoginPage