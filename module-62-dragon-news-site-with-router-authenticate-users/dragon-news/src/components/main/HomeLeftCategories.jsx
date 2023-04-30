import React, { useEffect, useState } from 'react';

const HomeLeftCategories = ({categoryId,setCategoryId}) => {

    const [categories,setCategories]=useState([]);

    const handleCategory=(id)=>{
        setCategoryId(id);
    }

    useEffect(()=>{
        const loadCategories=async()=>{
            const res=await fetch('https://dragon-news-api-server-7ejv00f42-aaachris1820.vercel.app/categories');
            const data=await res.json();
            setCategories(data);
        }

        loadCategories();

    },[])

    
    return (
        <div>
            <h1 className='font-bold text-xl text-gray-700 mb-5'>All Categories</h1>

            {categories.map(category=>
            <p key={category.id} 
            onClick={()=>handleCategory(category.id)} 
            className={categoryId==category.id
            ?'category-default bg-gray-300 text-gray-800'
            :'category-default text-gray-500 '}>
                {category.name}
            </p>)}
        </div>
    );
};

export default HomeLeftCategories;