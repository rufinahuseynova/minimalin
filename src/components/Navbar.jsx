
import { Link, NavLink } from "react-router-dom";
import "../css/Navbar.css";
import SearchBar from "./SearchBar";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { setDrawer } from "../redux/slices/basketSlice";

function Header() {
  const { products } = useSelector((store) => store.basket);
  const dispatch=useDispatch();

  return (
    <div className="nav">

      <div>
        <img
          src="https://minimalin-demo.myshopify.com/cdn/shop/files/logo-simple_150x.png?v=1692805162"
          alt="logo"
          className="logo"
        />
      </div>

      <ul className="navigations"> 
        <li>
          <NavLink to="/home" className="navi">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/shop" className="navi">
            Shop
          </NavLink>
        </li>
        <li>
          <NavLink to="/categories" className="navi">
            Categories
          </NavLink>
        </li>
      </ul>

      <div className="nav-icons">

        <div style={{marginRight:"50px"}} className="icon">
          <SearchBar></SearchBar>
        </div>

        <div style={{color:"black"}} className="icon">
          <Link to="/login">
            <PersonOutlineIcon sx={{ fontSize: 30 }} style={{color:"black",marginRight:"15px"}} />
          </Link>
        </div>

        <div className="icon">
           <Badge
             onClick={()=>dispatch(setDrawer())}
            badgeContent={products.length}
            color="black"
            >
              <ShoppingCartIcon style={{marginBottom:"5px"}}></ShoppingCartIcon>
            </Badge>
              
        </div>
        
      </div>
    </div>
  );
}

export default Header;
