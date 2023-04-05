import React,{useEffect, useState} from 'react';
import Orders from './Orders';
import ReviewProduct from './ReviewProduct';
import { getOrSetCartThenGetCart } from '../utilities';

const OrderReview = () => {


    const [cart,setCart]=useState([]);

    useEffect(()=>{
        const storedCart=getOrSetCartThenGetCart();
        setCart(storedCart);
    },[])

    const handleRemove=(id)=>{
        let storedCart=getOrSetCartThenGetCart();
        storedCart=storedCart.filter(pd=>pd.id!=id);
        localStorage.setItem('cart',JSON.stringify(storedCart));
        setCart(storedCart);
    }

    return (
        <div className='grid md:grid-cols-2 gap-8 md:px-20'>
            <div className='flex flex-col gap-6'>
                {cart.map(pd=> <ReviewProduct key={pd.id} product={pd} handleRemove={handleRemove} />)}
            </div>

            <div className=''>
                <Orders cart={cart}></Orders>
            </div>
        </div>
    );
};

export default OrderReview;