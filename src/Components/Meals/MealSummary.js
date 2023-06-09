import React from "react";
import style from './Meals.module.css'
import AddMeal from "./AddMeal";

const MealSummary = (props)=>{
    return(
        <>
        <div className={style.summary}>
            <h2>Delicious Food, Delivered To You</h2>
            <p>
                Choose your favourite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at time.
            </p>
            <p>
                All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!
            </p>
        </div>
        <AddMeal />
        </>
    )
}

export default MealSummary