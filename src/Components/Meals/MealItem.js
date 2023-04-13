import React, { useContext, useState } from "react";
import Button from "../UI/Button";
import style from './Meals.module.css'
import { Auth } from "../Auth/Auth";

const MealItem = (props)=>{
    const [amount,setAmount] = useState(1);
    const ctx = useContext(Auth)
    function changeAmount(e){
        setAmount(e.target.value)
    }
    function submitHandler(e){
        e.preventDefault()
        ctx.addItemHandler({...props,amount:amount})
    }
     return(<>
                            <div className={style.item}>
                               <p>{props.dishName}</p>
                               <p style={{fontStyle:"italic"}}>{props.dishTitle}</p>
                               <p style={{fontWeight:"bolder",color:"darkred"}}>&#x20B9;{props.price}</p>
                               <form onSubmit={submitHandler} className={style.amountCount}>
                                   <label htmlFor="count">Amount</label>
                                   <input type="number" className={style.box} onChange={changeAmount}  value={amount}/> 
                                   <Button className={style.button}>+ Add</Button>
                                </form>
                             </div>
                             <p>--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
                            </> )    
}
export default MealItem