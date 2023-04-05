import { Outlet } from 'react-router-dom'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import { useSelector } from 'react-redux'
import { Modal } from '../components/modal/modal'
import Sended from '../components/sended/Sended'
import { useDispatch } from 'react-redux'
import { toggleRatioModal } from '../store/modal/actions'

const  MainPage = () => {
  const modalSended = useSelector(store => store.modal.modalSended)

  const dispatch = useDispatch()

  const handleSearchFocus = event => {
    handleSelectApplication(event)
    let imgSearch = document.querySelector('.header__search-img')
    let inputSearch = document.querySelector('.header__search-input')
    if (event.target.closest('.header__search')) {
      imgSearch.className = 'header__search-img search-img-hidden'
      inputSearch.className = 'header__search-input input__search-focus'
    } else {
      imgSearch.className = 'header__search-img'
      inputSearch.className = 'header__search-input'
      inputSearch.value = ''
    }
  }

  const handleSelectApplication = event => {
    if (event.target.closest('.selectImpression')) {
      return
    } else {
      dispatch(toggleRatioModal(false))
    }
  }

  return (
    <div
      className="homePage"
      onClick={(event) => handleSearchFocus(event)}
    >
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