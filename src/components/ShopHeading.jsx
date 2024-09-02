import { NavLink } from "react-router-dom";

function ShopHeading() {
  return (
    <div>
      <div className="head-lent" style={{background:'#ebebeb',textAlign:'center',height:'120px',padding:'20px',textDecoration:'none'}}>
        <h2>Products</h2>
        <div style={{fontSize:'1.1rem'}}>
<NavLink to='/home'>Home{"<"}</NavLink>
<NavLink to='/shop'>Products</NavLink>
        </div>
      </div>
    </div>
  );
}

export default ShopHeading;
