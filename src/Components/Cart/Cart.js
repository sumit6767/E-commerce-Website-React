import React from "react";
import './Cart.css'

const Cart = (props)=>{
    return(
        <div className="cart">
            <span> <i className='fas fa-cart-plus'></i> </span>
            <span className="text">Your Carts</span>
            <span className="count">0</span>
        </div>
    )
}

export default Cart