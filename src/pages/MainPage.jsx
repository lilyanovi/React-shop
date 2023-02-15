import { Outlet } from 'react-router-dom'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import CatalogImpressions from '../components/catalogImpressions/CatalogImpressions'
import Modal from '../components/UI/modal/Modal'
import { useState } from 'react'

const  MainPage = () => {
  const [modal, setModal] = useState(false)

  return (
    <div className="homePage">
      <Header/>
      <main>
        <Outlet/>
        <CatalogImpressions setModal={setModal}/>
        <Modal visible={modal} setVisible={setModal}></Modal>
      </main>
      <Footer/>
    </div>
  )
}

export default MainPage