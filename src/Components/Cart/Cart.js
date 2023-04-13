import React, { useContext } from "react";
import './Cart.css'
import { Auth } from "../Auth/Auth";

const Cart = (props)=>{
    const ctx = useContext(Auth);
    const noOfItems = ctx.items.reduce((prevNum,item)=>{
        return prevNum+ +item.amount;
    },0)
    return(
        <div className="cart" onClick={props.onShow}>
            <span> <i className='fas fa-cart-plus'></i> </span>
            <span className="text">Your Carts</span>
            <span className="count">{noOfItems}</span>
        </div>
    )
}

export default Cart