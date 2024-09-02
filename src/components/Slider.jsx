import { Container, Carousel } from "react-bootstrap";
import Btn from "./Btn";
import "../css/Slider.css";
function Slider() {
  return (
    <div className="slider-container">
      <Container>
        <Carousel>
          <Carousel.Item>
            <div className="d-flex justify-content-evenly align-items-center  w-100 ">
              <div className="text">
                <h1>Men Collection</h1>
                <p>Elevate Your Basics with a Touch of Glam</p>
                <Btn text="Shop Now"></Btn>
              </div>
              <div className="slider-img">
                <img
                  src="https://minimalin-demo.myshopify.com/cdn/shop/files/slide_-_600_x_600_3_600x.png?v=1690415520"
                  alt="First slide"
                />
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="d-flex justify-content-evenly align-items-center w-100">
              <div className="text">
                <h1>Women Collection</h1>
                <p>Elevate Your Everyday Fashion Aesthetics</p>
                <Btn text="Shop Now"></Btn>
              </div>
              <div className="slider-img">
                <img
                  src="https://minimalin-demo.myshopify.com/cdn/shop/files/slide_-_600_x_600_4_600x.png?v=1690544558"
                  alt="Second slide"
                />
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="d-flex justify-content-evenly align-items-center  w-100">
              <div className="text">
                <h1>Baby Collection</h1>
                <p>Enchanting Styles for Dreamy Souls</p>
                <Btn text="Shop Now"></Btn>
              </div>
              <div className="slider-img">
                <img
                  src="https://minimalin-demo.myshopify.com/cdn/shop/files/slide_-_600_x_600_5_600x.png?v=1692030241"
                  alt="Third slide"
                />
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
}

export default Slider;
