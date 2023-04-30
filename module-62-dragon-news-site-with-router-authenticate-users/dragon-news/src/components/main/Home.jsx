import React, { useState } from 'react';
import HomeLeftCategories from './HomeLeftCategories';
import HomeRight from './HomeRight';
import HomeMiddleNews from './HomeMiddleNews';

const Home = () => {
    const [categoryId,setCategoryId]=useState(null);
    
    return (
        <main className='w-10/12 grid grid-cols-4 mx-auto mt-20'>
            <HomeLeftCategories categoryId={categoryId} setCategoryId={setCategoryId}></HomeLeftCategories>

            <HomeMiddleNews></HomeMiddleNews>

            <HomeRight></HomeRight>
        </main>
    );
};

export default Home;