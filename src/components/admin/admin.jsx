import { NavLink, Outlet, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { signOut, getAuth } from "firebase/auth"
import { removeUser } from "../../store/auth/action"


const Admin = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const auth = getAuth();

    const handleLogOut = event => {
        event.preventDefault()
    
        signOut(auth)
          .then(() => {
            dispatch(removeUser())
            localStorage.removeItem('remember')
            navigate('/login')
          }).catch(error => {
            console.log(error)
          })
      }

    return (
      <>
        <section className="container">
            <p>Admin</p>
            <button onClick={(e) => handleLogOut(e)}>Выход</button>
            <nav>
                <NavLink to="/admin">Управление заявками</NavLink>
                <NavLink to="/admin/subscriptions">Управление подписками</NavLink>
                <NavLink to="/admin/comments">Управление отзывами</NavLink>
            </nav>
            <Outlet/>
        </section>
      </>
    )
  }

  export default Admin