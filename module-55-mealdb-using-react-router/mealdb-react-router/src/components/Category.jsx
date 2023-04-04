import React from 'react';
import { useNavigate } from 'react-router-dom';

const Category = ({category}) => {
    const {strCategory,strCategoryDescription, strCategoryThumb}=category;

    const navigate=useNavigate();

    const exploreMoreHandler=()=>{
        navigate(`/${strCategory}/`);
    }

    return (
        <div className='border rounded-lg p-6 shadow-md'>
            <img src={strCategoryThumb} alt="category food image" className='mb-6 rounded-lg mx-auto' />
            <p className='text-xl font-semibold'>{strCategory}</p>
            <p className='mt-2  overflow-y-clip text-ellipsis h-[78px]'>{strCategoryDescription}</p>
            <button className='bg-blue-500 text-white px-8 py-3 rounded-lg font-extrabold mt-4' onClick={exploreMoreHandler}>Explore More</button>
        </div>
    );
};

export default Category;