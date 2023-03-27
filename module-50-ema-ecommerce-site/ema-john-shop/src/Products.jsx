import { useState,useEffect } from 'react';
import Product from './components/Product';

const Products = () => {
    const [products,setProducts]=useState([]);
    const [quantity,setQuantity]=useState(0)
    useEffect(()=>{
      const loadData=async ()=>{
        const res= await fetch('./products.json');
        const data= await res.json();
        setProducts(data);
        
      }
      loadData();
      
    },[]);

    const handleClick=()=>{
        let newQuantity=quantity+1;
        setQuantity(newQuantity);
    }

    console.log(products)
    return (
        <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-[16px] md:px-[50px] gap-y-10'>
            <div className='col-span-1 md:col-span-2 lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6'>
                {
                    products.map(product=><Product key={product.id} name={product.name} seller={product.seller} price={product.price} imgUrl={product.img} handleClick={handleClick} rating={product.ratings} />)
                }
            </div>
            <div className='order-first lg:order-last bg-slate-100 p-12 border rounded-xl shadow-sm'>
                <h1 className='text-lg font-semibold mb-2'>Order summary</h1>
                <p>Selected Items : {quantity}</p>

            </div>
        </section>
    );
};

export default Products;