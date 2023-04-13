import React, { useEffect ,useState} from "react";
import './Cart.css'

const Cart = (props)=>{
    const [counter,setCounter] = useState(0);
    // useEffect(()=>{
    //     setTimeout(()=>{
    //         setCounter((preState)=>{
    //         return preState+1;
    //     })},1000)
    // },[counter]
    // )
    return(
        <div className="cart" onClick={props.onShow}>
            <span> <i className='fas fa-cart-plus'></i> </span>
            <span className="text">Your Carts</span>
            <span className="count">{counter}</span>
        </div>
    )
}

export default Cart