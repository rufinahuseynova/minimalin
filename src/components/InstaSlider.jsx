
import Slider from 'react-slick';
import '../css/InstaSlider.css'; 

const InstagramSlider = () => {
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
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="instagram-slider">
      <h2>Follow on Instagram</h2>
      <p>@marino-themes</p>
      <Slider {...settings}>
        <div className="slide-item">
          <img src="https://img.freepik.com/premium-photo/handsome-fashion-model-trendy-fashion-with-relaxed-mens-portrait-lifestyle-background_171965-39385.jpg?size=626&ext=jpg&ga=GA1.2.1506731296.1669917347&semt=ais_hybrid" alt="Instagram 1" />
        </div>
        <div className="slide-item">
          <img src="https://img.freepik.com/free-photo/portrait-stylish-handsome-young-man_155003-14109.jpg?size=626&ext=jpg&ga=GA1.1.1506731296.1669917347&semt=ais_hybrid" alt="Instagram 2" />
        </div>
        <div className="slide-item">
          <img src="https://img.freepik.com/free-photo/portrait-handsome-confident-model-sexy-stylish-man-dressed-biker-leather-jacket-black-jeans-fashion-hipster-male-isolated-white-studio-sunglasses_158538-22579.jpg?size=626&ext=jpg&ga=GA1.2.1506731296.1669917347&semt=ais_hybrid" alt="Instagram 3" />
        </div>
        <div className="slide-item">
          <img src="https://img.freepik.com/premium-photo/handsome-male-fashion-model-zip-up-jacket-male-dress-with-dark-teal-lifestyle-men-people-portrait-fashion-mens-background_171965-52937.jpg?size=626&ext=jpg&ga=GA1.2.1506731296.1669917347&semt=ais_hybrid" alt="Instagram 4" />
        </div>
        <div className="slide-item">
          <img src="https://img.freepik.com/premium-photo/handsome-fashion-model-slim-fit-blazer-male-dress-with-emerald-green-lifestyle-mens-portrait-fashion-male-background-lifestyle-portrait-fashion-graphy_171965-41628.jpg?size=626&ext=jpg&ga=GA1.2.1506731296.1669917347&semt=ais_hybrid" alt="Instagram 5" />
        </div>
        <div className="slide-item">
          <img src="https://img.freepik.com/premium-photo/handsome-male-fashion-model-zip-up-jacket-male-dress-with-pale-peach-mens-background-capturing-fashion-lifestyle-portrait-style_171965-51715.jpg?size=626&ext=jpg&ga=GA1.2.1506731296.1669917347&semt=ais_hybrid" alt="Instagram 1" />
        </div>
        <div className="slide-item">
          <img src="https://img.freepik.com/premium-photo/handsome-elegant-man-with-curly-hair-wearing-black-turtleneck-glasses_149155-3204.jpg?size=626&ext=jpg&ga=GA1.1.1506731296.1669917347&semt=ais_hybrid" alt="Instagram 2" />
        </div>
        <div className="slide-item">
          <img src="https://img.freepik.com/premium-photo/handsome-male-fashion-model-trendy-zip-up-jacket-male-dress-portrait-with-menswear-mens-background_171965-48516.jpg?size=626&ext=jpg&ga=GA1.1.1506731296.1669917347&semt=ais_hybrid" alt="Instagram 3" />
        </div>
        <div className="slide-item">
          <img src="https://img.freepik.com/premium-photo/handsome-male-fashion-model-zip-up-jacket-male-dress-with-soft-mint-green-mens-background-fashionable-lifestyle-portrait-featuring-relaxed-casual-wear_171965-51822.jpg?size=626&ext=jpg&ga=GA1.1.1506731296.1669917347&semt=ais_hybrid" alt="Instagram 4" />
        </div>
        <div className="slide-item">
          <img src="https://img.freepik.com/premium-photo/full-size-body-length-side-view-young-brunet-man-20s-wears_222877-21966.jpg?size=626&ext=jpg&ga=GA1.1.1506731296.1669917347&semt=ais_hybrid" alt="Instagram 5" />
        </div>
      </Slider>
    </div>
  );
};

export default InstagramSlider;
