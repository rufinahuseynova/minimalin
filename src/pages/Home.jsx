
import Slider from "../components/Slider";
import Cards from "../components/Cards";
import ProductList from "../components/ProductList";
import Timer from "../components/Timer";
import ProductSlider from '../components/ProductSlider'
import Arrivals from '../components/Arrivals'
import Lent from '../components/Lent'
import InstagramSlider from '../components/InstaSlider';
function Home() {
  return (
    <div className="home-container"> 
      <Slider></Slider>
      <Cards></Cards>
      <ProductList></ProductList>
      <Timer></Timer>
    <ProductSlider></ProductSlider>
    <Arrivals></Arrivals>
    <Lent></Lent>
   <InstagramSlider></InstagramSlider>
    </div>
  );
}

export default Home;
