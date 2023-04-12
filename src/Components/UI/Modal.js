import React from "react";
import ReactDOM from "react-dom";
import './Modal.css'

const ModalLay = (props)=>{
    return(
        <div className="modal">
            {props.children}
        </div>
    )
}
const Back = ()=>{
    return(
        <div className="back">
        </div>
    )
}

const Modal = (props)=>{
    return(
        <>
        {ReactDOM.createPortal(<Back></Back>,document.getElementById("modal"))}
        {ReactDOM.createPortal(<ModalLay>{props.children}</ModalLay>,document.getElementById("modal"))}
        </>
    )
}
export default Modal