import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../redux/slices/productSlice";
import Product from "./Product";
import '../css/ProductList.css';
import Btn from "./Btn";


function ProductList() {
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store.product);

  console.log(products);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch])


  return(

  <div className="productList-container"> 
  
    <h2>Best Selling</h2>
    
    <div className="flex-row">
      {
      products &&
        products.map((product) => (
          <Product key={product.id} product={product}></Product>
      ))
      }
    </div>

    <div className="wa-btn"><Btn text="View All"></Btn></div>

  </div>
  
  )}

export default ProductList;

