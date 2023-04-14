import React from "react";
import './Cart.css';
import { Auth } from "../Auth/Auth";

export default function Operator(props){
    const ctx = React.useContext(Auth)
    function addItem(){
        ctx.addItemHandler(props.item)
    }
    function removeItem(){
        ctx.deleteItemHandler(props.id)
    }
    return(
        <button className="operate" onClick={props.type==="add"?addItem:removeItem}>
            {props.children}
        </button>
    )
}