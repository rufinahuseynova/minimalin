
import '../css/Footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

import { FaAmazonPay } from "react-icons/fa";
import { FaApplePay } from "react-icons/fa";
import { FaBitcoin } from "react-icons/fa6";
import { FaGooglePay } from "react-icons/fa";
import { FaPaypal } from "react-icons/fa6";
import { SiVisa } from "react-icons/si";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section about">
        <h5>About Us.</h5>
        <p>Minimal E-Commerce is a dynamic and innovative online retail platform that offers a wide range of products to customers worldwide.</p>
        <div className="social-icons">
          <i className="fab fa-facebook"><FacebookIcon></FacebookIcon></i>
          <i className="fab fa-x-twitter"><XIcon></XIcon></i>
          <i className="fab fa-youtube"><YouTubeIcon></YouTubeIcon></i>
          <i className="fab fa-instagram"><InstagramIcon></InstagramIcon></i>
        </div>
        <div className="checkout-icons">
          <p>Guaranteed safe checkout</p>
          <div className='pays'>
          <div className="pay"><FaAmazonPay></FaAmazonPay></div>
          <div className="pay"><FaApplePay></FaApplePay></div>
          <div className="pay"><FaBitcoin></FaBitcoin></div>
          <div className="pay"><FaGooglePay></FaGooglePay></div>
          <div className="pay"><FaPaypal></FaPaypal></div>
          <div className="pay"><SiVisa></SiVisa></div>
          </div>
        </div>
      </div>
      <div className='link'>
      <div className="footer-section links">
        <h5>Quick Link</h5>
        <ul>
          <li>My Account</li>
          <li>My Cart</li>
          <li>Wishlist</li>
          <li>Gift Card</li>
          <li>Need Help?</li>
        </ul>
      </div>
      <div className="footer-section links">
        <h5>Information</h5>
        <ul>
          <li>About us</li>
          <li>Contact</li>
          <li>Blogs</li>
          <li>Size Chart</li>
          <li>FAQ</li>
        </ul>
      </div>
      <div className="footer-section links">
        <h5>Policies</h5>
        <ul>
          <li>Privacy Policy</li>
          <li>Refund Policy</li>
          <li>Terms of Service</li>
          <li>Shipping Policy</li>
          <li>Contact Information</li>
        </ul>
      </div>
      </div>
      <div className="footer-bottom">
        <h6>© 2024 <b>Minimalin.</b> All rights reserved.</h6>
      </div>
    </footer>
  );
}

export default Footer;
