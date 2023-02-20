import { NavLink } from "react-router-dom"


const SignUpPage = () => {
    return (
      <>
      <section className="container">
        <h1>SignUpPage</h1>
        <div>
            <input type="text"  required/>
            <input type="email"  required/>
            <input type="password"  required/>
            <button type="submit">Зарегестрироваться</button>
        </div>
        <div>
            <button>Войти с помощью Google</button>
        </div>
        <div>
            <p>Уже есть учётная запись?</p>
            <NavLink to='/login'>Войти</NavLink>
        </div>
        </section>
      </>
    )
  }
  
  export default SignUpPage