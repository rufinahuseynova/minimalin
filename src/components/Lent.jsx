import "../css/Lent.css";
import {
  FaShippingFast,
  FaMoneyBillAlt,
  FaLock,
  FaHeadset,
} from "react-icons/fa";

function Marquee() {
  return (
    <>
      <div className="marquee">
        <div className="marquee-content">
          <span>
            Guaranteed for 30 days • Free return shipping • No restocking fee •
            No final sale items • 100% Payment Secure • Online Support •
            Guaranteed for 30 days • Free return shipping • No restocking fee •
            No final sale items • 100% Payment Secure • Online Support •
            Guaranteed for 30 days • Free return shipping • No restocking fee •
            No final sale items • 100% Payment Secure • Online Support
          </span>
        </div>
        </div>
        <div style={{marginTop:"50px"}}>
          <div className="service-features">
            <div className="feature">
              <FaShippingFast size={40} />
              <div className="feature-text">
                <h3>Free Shipping</h3>
                <p>
                  On orders over <strong>$99</strong>.
                </p>
              </div>
            </div>
            <div className="feature">
              <FaMoneyBillAlt size={40} />
              <div className="feature-text">
                <h3>Money Back</h3>
                <p>Money back in 15 days.</p>
              </div>
            </div>
            <div className="feature">
              <FaLock size={40} />
              <div className="feature-text">
                <h3>Secure Checkout</h3>
                <p>100% Payment Secure.</p>
              </div>
            </div>
            <div className="feature">
              <FaHeadset size={40} />
              <div className="feature-text">
                <h3>Online Support</h3>
                <p>Ensure the product quality.</p>
              </div>
            </div>
          </div>
       
      </div>
    </>
  );
}

export default Marquee;
