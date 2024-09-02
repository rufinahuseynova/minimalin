
import Drawer from '@mui/material/Drawer';
import { useDispatch, useSelector } from "react-redux";
import { calculateBasket, setDrawer, removeFromBasket } from "../redux/slices/basketSlice";
import { useEffect } from "react";
import '../css/Sebet.css'
import Btn from '../components/Btn'

function Sebet() {
    const { products, drawer, totalAmount } = useSelector((store) => store.basket);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(calculateBasket());
    }, [dispatch]);

    const handleRemove = (id) => {
        dispatch(removeFromBasket(id));
    };

    return (
        <div>
            <Drawer open={drawer} anchor="right" onClose={() => dispatch(setDrawer())} className='drawer'>
                <div className="cart-container">
                    <div className="cart-header">
                        <h2>Cart</h2>
                        <button className="close-button" onClick={() => dispatch(setDrawer())}>×</button>
                    </div>
                    {products && products.map((product) => {
                        return (
                            <div className="cart-item" key={product.id}>
                                <img src={product.image} alt="" />
                                <div className="cart-item-details">
                                    <h4>{product.title} ({product.count})</h4>
                                    <p>{product.price} AZN</p>
                                </div>
                                <button className="remove-button" onClick={() => handleRemove(product.id)}>×</button>
                            </div>
                        );
                    })}
                    <div className="cart-footer">
                        <p className="subtotal">Subtotal: {totalAmount} AZN</p>
                        <div style={{display:'flex',justifyContent:'center',gap:'15px',marginTop:'40px'}}>
                            <Btn text='View Cart'></Btn>
                            <Btn text='Checkout'></Btn>
                        </div>
                        <p className="free-shipping">Free Shipping on All Orders Over $100!</p>
                    </div>
                </div>
            </Drawer>
        </div>
    );
}

export default Sebet;
