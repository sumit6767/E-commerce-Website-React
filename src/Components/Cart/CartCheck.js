import React, { useContext } from "react";
import Modal from "../UI/Modal";
import './Cart.css'
import { Auth } from "../Auth/Auth";
import Operator from "./Operator";

function CartCheck(props){
    const ctx = useContext(Auth)
    const cartItems = ctx.items
    console.log(cartItems)
    const CartItem = <ul>{
        cartItems.map(item=>{
            return(
                <li className="list" key={Math.random()}>
                <span>{item.dishName}</span> 
                <p>
                    <span className="quantity">&#x20B9;{item.price} <span style={{border:"1px solid black",padding:"10px",marginLeft:"10%"}}>X {item.amount}</span> = &#x20B9;{item.price*item.amount}</span>
                </p>
                <div className="operator">
                    <Operator type="add" id={item.id} item={item}>+</Operator>
                    <Operator type="remove" id={item.id} item={item}>-</Operator>
                </div>
                </li>
            )
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