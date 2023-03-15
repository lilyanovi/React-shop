import Slider from '../components/slider/Slider'
import Advantages from '../components/advantages/Advantages'
import CatalogHomePage from '../components/catalogImpressions/CatalogHomePage'
import Questions from '../components/questions/QuestionsContent'
import Sertificates from '../components/sertificates/Sertificates'
import Stocksslider from '../components/stocksslider/Stocksslider'
import Reviews from '../components/reviews/Reviews'

const HomePage = () => {
  return (
    <>
      <Slider/>
      <Advantages/>
      <CatalogHomePage/>
      <Stocksslider/>
      <Sertificates/>
      <Reviews/>
      <Questions/>
    </>
  )
}

export default HomePage