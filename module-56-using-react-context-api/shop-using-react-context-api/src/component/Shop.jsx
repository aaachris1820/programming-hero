import React, { createContext, useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from './Product';
let ProductContext=createContext([]);

const Shop = () => {
    const loaderData=useLoaderData();

    
    const [products,setProducts]=useState(loaderData);
    
    ProductContext=createContext(products);
    console.log(products);
    
    return (
        <div className='w-10/12 mx-auto py-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            {products.map(product=><Product key={product.id} product={product} />)}
            
        </div>
    );
};

export  {Shop,ProductContext};