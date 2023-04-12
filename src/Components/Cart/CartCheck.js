import React from "react";
import Modal from "../UI/Modal";
import './Cart.css'

function CartCheck(props){
    const CartItem = <ul className="list">{
        [{id:"1",name:"Sushi",amount:"2",price:12.99}].map(item=>{
            return<li>{item.name}</li>;
        })
    }
    </ul>

    return(
        <Modal>
            {CartItem}
            <div className="description">
                <span>Total amount</span>
                <span>35.62</span>
            </div>
            <div className="action">
                <button className="close">Close</button>
                <button className="order">Order</button>
            </div>
        </Modal>
    )
}

export default CartCheck