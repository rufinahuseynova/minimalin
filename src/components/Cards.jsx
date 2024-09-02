import "../css/Cards.css";
import suit from "../images/suit.png";
import dress from "../images/dress.png";
import Btn from "./Btn";
function Cards() {
  return (
    <div>

      <div className="cards">

        <div className="kart">
          <div className="card-text">
            <h3>Suits & FormalWear</h3>
            <Btn text="Shop Now"></Btn>
          </div>

          <div>
            <img src={suit} alt="suit" className="card-img"/>
          </div>
        </div>



        <div className="kart">
          <div className="card-text">
            <h3>Tops & Gowns</h3>
            <Btn text="Shop Now"></Btn>
          </div>

          <div>
            <img src={dress} alt="suit" className="card-img img2"/>
          </div>
        </div>



      </div>
    </div>
  );
}

export default Cards;
