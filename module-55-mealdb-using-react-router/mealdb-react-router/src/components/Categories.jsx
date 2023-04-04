import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Category from './Category';

const Categories = () => {
    const categories=useLoaderData();
    
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-11/12 mx-auto'>
            {categories.categories.map(category=> <Category key={category.idCategory} category={category} ></Category>
            )}
        </div>
    );
};

export default Categories;