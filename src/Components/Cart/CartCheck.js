import React, { useContext } from "react";
import Modal from "../UI/Modal";
import './Cart.css'
import { Auth } from "../Auth/Auth";

function CartCheck(props){
    const ctx = useContext(Auth)
    const cartItems = ctx.items
    console.log(cartItems)
    const CartItem = <ul>{
        cartItems.map(item=>{
            return<li className="list" key={Math.random()}><span>{item.dishName}</span> <span>&#x20B9;{item.price} x <span className="quantity">{item.amount}</span> = &#x20B9;{item.price*item.amount}</span></li>;
        })
    }
    </ul>

    return(
        <Modal>
            {CartItem}
            <div className="description">
                <span>Total amount</span>
                <span>&#x20B9;{ctx.totalAmount}</span>
            </div>
            <div className="action">
                <button className="close" onClick={props.onClose}>Close</button>
                <button className="order">Order</button>
            </div>
        </Modal>
    )
}

export default CartCheck