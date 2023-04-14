import React from "react";
import MealItem from "./MealItem";
import style from './Meals.module.css'

const AddMeal= (props)=>{
    const mealItem = [{dishName:"Sushi",dishTitle:"Finest Fish Veggies",price:100},
                      {dishName:"Schnitzel",dishTitle:"A german speciality!",price:200},
                      {dishName:"Barbecue Burger",dishTitle:"American, raw,meaty",price:300},
                      {dishName:"Green Bowl",dishTitle:"Finest Fish Veggies",price:400},
                      {dishName:"Sushi",dishTitle:"Finest Fish Veggies",price:500},]
    return(
        <div className={style.addmeal}>
            {
                mealItem.map((meal,value)=>{
                    console.log(value)
                    return <MealItem id={value} key ={Math.random()} dishName={meal.dishName} dishTitle={meal.dishTitle} price={meal.price} />
                })
            }

        </div>
    )
}

export default AddMeal;