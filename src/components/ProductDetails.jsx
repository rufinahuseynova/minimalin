import '../css/ProductDetails.css'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setSelectedProduct } from '../redux/slices/productSlice';
import { CiSquarePlus } from "react-icons/ci";
import { CiSquareMinus } from "react-icons/ci";
import { addToBasket, calculateBasket } from '../redux/slices/basketSlice';
import { FaEye } from "react-icons/fa";
function ProductDetails() {
    const {id} = useParams();
    const {products,selectedProduct}=useSelector((store)=>store.product)
    const {price,image,title,description}=selectedProduct;
    const dispatch=useDispatch();

    const [count,setCount]=useState(0);
const increment=()=>{
    setCount(count+1)
}
const decrement=()=>{
    setCount(count-1)
}

const addBasket=()=>{
    const payload={
        id,
        price,
        image,
        title,
        description,
        count
    }
    dispatch(addToBasket(payload));
    dispatch(calculateBasket());
}



useEffect(()=>{
getProductById();
},[])

const getProductById=()=>{
    products && products.map((product)=>{
        if(product.id==id){
            dispatch(setSelectedProduct(product));
        }
    })
}
    return (
        <div className='product-details-container'>
            <div><img src={image} alt="" className='product-image' /></div>
            <div className='product-details'>
                <h3>{title}</h3>
                <p>{description}</p>
           <hr /><p><FaEye></FaEye> 19 people are viewing this right now.</p>
                <h2>{price} azn</h2>

                <div className='quantity-selector'>
              <CiSquareMinus onClick={decrement}  />{count}<CiSquarePlus onClick={increment}  />
                </div>

                <div className='add-to-basket-button'>
                    <button onClick={addBasket}>Add to basket</button>
                </div>
            </div>
        </div>

    );
}

export default ProductDetails;

