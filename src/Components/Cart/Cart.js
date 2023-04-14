import React, { useContext, useEffect, useRef } from "react";
import './Cart.css'
import { Auth } from "../Auth/Auth";

const Cart = (props)=>{
    const ctx = useContext(Auth);
    const noOfItems = ctx.items.reduce((prevNum,item)=>{
        return prevNum+ item.amount;
    },0)
    const itemRef = useRef(1)
    useEffect(()=>{
        itemRef.current = 0;
    })
    const prevValue = itemRef.current;
    return(
        <div className={`cart ${prevValue?"action-cart":""}`} onClick={props.onShow}>
            <span> <i className='fas fa-cart-plus'></i> </span>
            <span className="text">Your Carts</span>
            <span className="count">{noOfItems}</span>
        </div>
    )
}

export default Cart