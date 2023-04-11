import React from "react";

const MealItem = (props)=>{
    return(
        <div>
            <p>{props.dishName}</p>
            <p style={{fontStyle:"italic"}}>{props.dishTitle}</p>
            <p style={{fontWeight:"bolder",color:"darkred"}}>&#x20B9;{props.price}</p>
            <p>--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
        </div>
    )
}
export default MealItem