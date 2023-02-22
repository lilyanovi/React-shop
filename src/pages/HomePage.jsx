import Slider from '../components/slider/Slider'
import Advantages from '../components/advantages/Advantages'
import CatalogHomePage from '../components/catalogImpressions/CatalogHomePage'
import Questions from '../components/questions/QuestionsContent'
import Sertificates from '../components/sertificates/Sertificates'

const HomePage = () => {
  return (
    <>
      <Slider/>
      <Advantages/>
      <CatalogHomePage/>
      <Sertificates/>
      <Questions/>
    </>
  )
}

export default HomePage