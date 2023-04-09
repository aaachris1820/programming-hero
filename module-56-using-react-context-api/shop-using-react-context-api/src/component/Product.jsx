import React, { useContext } from 'react';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CartContext } from '../App';


const Product = ({product}) => {
    const {title,image,rating,price,id}=product;
    const [cart,setCart]=useContext(CartContext);
    

    const addToCartHandler=(id)=>{
        const newCart=[...cart];
        let itemExist=newCart.find(item=>item.hasOwnProperty(id));
        
        if(itemExist){
            itemExist[`${id}`]++;
        }
        else{
            let a={};
            let b=id;
            a[b]=1;
            newCart.push(a);
        }
        setCart(newCart);
        toast('Product added to cart. ')
    }
    

    return (
        <div className='border rounded-lg p-5 flex flex-col'>
            <div className='flex justify-center'>
                <img src={image} alt={title+'photo'} className='h-[250px] object-cover rounded-lg ' />
            </div>
            
            <p className='font-semibold text-lg mt-12 mb-3'>{title}</p>
            <p className='mb-1'>Price : {price}</p>
            <p className='mb-4'>Rating : {rating.rate} ({rating.count} reviews) </p>
            <div className='flex flex-col h-full'>
            
            <button className='px-6 py-2 bg-orange-500 text-white rounded-lg font-bold mt-auto' onClick={()=>addToCartHandler(id)}> Add to Cart</button>
            
            </div>
           
        </div>
    );
};

export default Product;