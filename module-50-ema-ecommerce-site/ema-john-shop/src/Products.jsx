import { useState,useEffect } from 'react';
import Product from './components/Product';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Orders from './components/Orders';
import { getOrSetCartThenGetCart } from './utilities';
import Loading from './components/Loading';

const Products = () => {
    const navigation=useNavigation();
    
    const products=useLoaderData();

    const[cart,setCart]=useState([]);
    

    useEffect(()=>{
        const storedCart=getOrSetCartThenGetCart();
        setCart(storedCart);
    },[])

    const handleClick=(product)=>{
        const storedCart=getOrSetCartThenGetCart();
        let newProduct=storedCart.find(pd=>pd.id==product.id);
        if(newProduct){
            newProduct.quantity++;
        }
        else{
            newProduct={...product};
            newProduct.quantity++;
            storedCart.push(newProduct);
        }
        localStorage.setItem('cart',JSON.stringify(storedCart));
        setCart(storedCart); 
    }

    const handleClearCart=()=>{
        localStorage.setItem('cart',JSON.stringify([]))
        setCart([]); 
    }
    
    if(navigation.state==='loading')
        return <Loading></Loading>;
 
    return (
        <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 px-[16px] md:px-[50px] gap-y-10'>
            <div className='col-span-1 md:col-span-2 lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-y-6 order-last lg:order-first'>
                {
                   products.map(pd=> <Product key={pd.id} product={pd} handleClick={handleClick} />)
                }
            </div>
            <div className='relative order-first lg:order-last'>
                <Orders cart={cart} handleClearCart={handleClearCart} ></Orders>
            </div>
            
        </section>
    );
};

export default Products;