import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../redux/slices/productSlice";
import Product from "./Product";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../css/ProductList.css';
import Btn from "./Btn";
import '../css/ProductSlider.css'
function ProductList() {
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store.product);

  console.log(products);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div> 
      <h2 className="f-heading" style={{textAlign:"center",}}>New Arrivals</h2>
      <div className="featured-slider">
        {products && products.length > 0 ? (
          <Slider {...settings}>
            {products.map((product) => (
              <Product key={product.id} product={product}></Product>
            ))}
          </Slider>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <div className="wa-btn"><Btn text="View All"></Btn></div>
    </div>
  );
}

export default ProductList;