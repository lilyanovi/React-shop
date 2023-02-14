import { Routes, Route } from 'react-router-dom'
import './App.scss'
import MainPage from './pages/MainPage'
import HomePage from './pages/HomePage'
import ErrorPage from './pages/404Page'

export default function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage/>}>
          <Route index element={<HomePage/>}></Route>
          <Route path='*' element={<ErrorPage />}></Route>
        </Route>
      </Routes>
    </>
  )
}