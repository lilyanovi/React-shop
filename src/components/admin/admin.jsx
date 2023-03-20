import { NavLink, Outlet, useNavigate } from "react-router-dom"
import React, { useState } from 'react';
import './admin.scss'
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
      <section className="admin container">
        <h1>Администрирование</h1>
        <nav>
          <NavLink className="admin-nav" to="/admin">Управление заявками</NavLink>
          <NavLink className="admin-nav" to="/admin/comments">Управление отзывами</NavLink>
          <NavLink className="admin-nav" to="/admin/subscriptions">Управление подписками</NavLink>
          <NavLink className="admin-nav" onClick={(e) => handleLogOut(e)}>Выход</NavLink>
        </nav>
        <Outlet />
      </section>
    </>
  )
}

export default Admin