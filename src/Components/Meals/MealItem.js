import React from "react";

const MealItem = (props)=>{
    return(
        <div>
            <p>{props.dishName}</p>
            <p>{props.dishTitle}</p>
            <p>{props.price}</p>
            <p>----------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
        </div>
    )
}
export default MealItem