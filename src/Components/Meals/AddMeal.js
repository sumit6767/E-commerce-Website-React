import React from "react";
import MealItem from "./MealItem";
import style from './Meals.module.css'

const AddMeal= (props)=>{
    const mealItem = [{dishName:"Sushi",dishTitle:"Finest Fish Veggies",price:"22.99"},
                      {dishName:"Sushi",dishTitle:"Finest Fish Veggies",price:"22.99"},
                      {dishName:"Sushi",dishTitle:"Finest Fish Veggies",price:"22.99"},
                      {dishName:"Sushi",dishTitle:"Finest Fish Veggies",price:"22.99"},
                      {dishName:"Sushi",dishTitle:"Finest Fish Veggies",price:"22.99"},]
    return(
        <div className={style.addmeal}>
            {
                mealItem.map((meal)=>{
                    return <MealItem  key ={Math.random()} dishName={meal.dishName} dishTitle={meal.dishTitle} price={meal.price} />
                })
            }

        </div>
    )
}

export default AddMeal;