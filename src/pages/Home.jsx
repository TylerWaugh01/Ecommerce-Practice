import Annoucements from '../components/Annoucements'
import Categories from '../components/Categories'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'

const Home = () => {
  return (
    <div>
        <Annoucements />
        <Navbar/>
        <Slider />
        <Categories />
        <Products />
        <Newsletter />
    </div>
  )
}

export default Home