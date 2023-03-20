import { NavLink, Outlet } from "react-router-dom"

const Admin = () => {

    return (
      <>
        <section className="container">
            <p>Admin</p>
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