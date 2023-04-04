import React from 'react';

const CategoryFood = ({food}) => {
    const {strMeal,strMealThumb}=food;
    return (
        <div className='border rounded-lg p-6 shadow-md'>
            <img src={strMealThumb} alt="category food image" className='mb-6 rounded-lg mx-auto ' />
            <p className='text-xl font-semibold'>{strMeal}</p>

            <button className='bg-blue-500 text-white px-8 py-3 rounded-lg font-extrabold mt-4' >More Details</button>
        </div>
    );
};

export default CategoryFood;