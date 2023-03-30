import React from 'react';
import Meal from './Meal';
const Meals = ({allmeals, handleAddToCart}) => {

    return (
        <div style={{gridColumnStart:"1",gridColumnEnd:"4",display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"8px"}}>
            {allmeals.map(meal=>{
                return <Meal key={meal.idMeal} id={meal.idMeal} name={meal.strMeal} area={meal.strArea} imageUrl={meal.strMealThumb} meal={meal} handleAddToCart={handleAddToCart} ></Meal>
            })}
        </div>
    );
};

export default Meals;