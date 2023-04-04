import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryFood from './CategoryFood';

const CategoryFoods = () => {
    const foods=useLoaderData();
    
    console.log(foods.meals);
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-11/12 mx-auto'>
            {foods.meals.map(food=> {
                return <CategoryFood key={food.idMeal} food={food} />
            })}
        </div>
    );
};

export default CategoryFoods;