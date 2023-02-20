import { Outlet } from 'react-router-dom'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import { useSelector } from 'react-redux'
import { Modal } from '../components/modal/modal'
import Sended from '../components/sended/Sended'

const  MainPage = () => {
  const modalSended = useSelector(store => store.modal.modalSended)

  return (
    <div className="homePage">
      <Header/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
      {
        modalSended &&
        <Modal>
          <Sended/>
        </Modal>
      }
    </div>
  )
}

export default MainPage