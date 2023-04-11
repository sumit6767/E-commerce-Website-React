import React, { useState } from "react";
import Button from "../UI/Button";
import style from './Meals.module.css'

const MealItem = (props)=>{
    const [count,setCount] = useState(1);
    function increment(){
        setCount(prev=>{
            return prev+1
        });
    }
    function submitHandler(e){
        e.preventDefault()
        increment()
    }
    return(
        <>
        <div className={style.item}>
            <p>{props.dishName}</p>
            <p style={{fontStyle:"italic"}}>{props.dishTitle}</p>
            <p style={{fontWeight:"bolder",color:"darkred"}}>&#x20B9;{props.price}</p>
            <form onSubmit={submitHandler} className={style.amountCount}>
                <span>Amount</span><input type="number"  className={style.box}  value={count}/> 
                <Button className={style.button}>+ Add</Button>
            </form>
        </div>
        <p>--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
        </>
    )
}
export default MealItem