import "../css/Product.css";
import { useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineCompareArrows } from "react-icons/md";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../css/Colors.css";

function Product({ product }) {
  const { id, price, image, title, description } = product;

  const navigate = useNavigate();
  const handleDetailClick = () => {
    navigate(`/product/${id}`);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  // const colors = [
  //   { name: "Gold", hex: "#FFD700" },
  //   { name: "Grey", hex: "#808080" },
  //   { name: "Pink", hex: "#FF00FF" },
  //   { name: "Red", hex: "#8B0000" },
  //   { name: "More", hex: "#E0E0E0" },
  // ];

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className="product-card" onClick={handleDetailClick}>
        <div className="card-image">
          <img src={image} alt="product" className="product"></img>

          <div className="icons">
            <i className="icon-eye" data-aos="fade-down">
              <FaEye />
            </i>
            <i className="icon-cart" data-aos="fade-down">
              <FaShoppingCart />
            </i>
            <i className="icon-heart" data-aos="fade-down">
              <FaRegHeart />
            </i>
            <i className="icon-compare" data-aos="fade-down">
              <MdOutlineCompareArrows />
            </i>
          </div>
        </div>
      </div>

      <div className="txtcolor">
        <div className="text">
          <p>{title}</p>
          <h5>{price} AZN</h5>
        </div>
{/* 
        <div className="color-selector">
          {colors.map((color, index) => (
            <div
              key={index}
              className="color-dot"
              style={{ backgroundColor: color.hex }}
            >
              <span className="tooltip-text">{color.name}</span>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
}

export default Product;
