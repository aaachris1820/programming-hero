import { useState,useEffect } from 'react';
import Product from './components/Product';

const Products = () => {
    const [products,setProducts]=useState([]);
    const [cart,setCart]=useState([]);
    useEffect(()=>{
      const loadData=async ()=>{
        const res= await fetch('./products.json');
        const data= await res.json();
        

        let storedCart=localStorage.getItem('cart');
        if(JSON.parse(storedCart)){
            storedCart=JSON.parse(storedCart);
            for (let product of storedCart){
                let index=data.indexOf(data.find(x=>x.id==product.id));
                data[index]=product;

            }    

            
        }

        else{
            let newCart=[];
            localStorage.setItem('cart',JSON.stringify(newCart));
        }
        setCart(storedCart);
        setProducts(data);
        console.log(cart)
       
      }
      loadData();
      
    },[]);

    const handleClick=(id)=>{
        let storedCart=JSON.parse(localStorage.getItem('cart'));

        let newProduct=products.find(product=>product.id==id);
        let storedProduct=storedCart.find(product=>product.id===id);

        if(storedProduct){
            storedProduct.quantity++;
        }
        else{
            newProduct.quantity++;
            storedCart.push(newProduct);
        }
            
        setCart(storedCart);
        localStorage.setItem('cart',JSON.stringify(storedCart));
    }

 
    return (
        <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-[16px] md:px-[50px] gap-y-10'>
            <div className='col-span-1 md:col-span-2 lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6'>
                {
                    products.map(product=><Product key={product.id}
                    id={product.id}
                    name={product.name}
                    seller={product.seller}
                    price={product.price}
                    imgUrl={product.img}
                    handleClick={handleClick}
                    rating={product.ratings} />)
                }
            </div>
            <div className='order-first lg:order-last bg-amber-200 p-12 border rounded-xl shadow-sm text-slate-700 font-medium'>
                <h1 className='text-xl font-semibold mb-2'>Order summary</h1>

                <p>Selected Items : {cart&&cart.reduce((sum,product)=>sum+product.quantity,0)}</p>

                <p>Total Price : ${cart&&cart.reduce((sum,product)=>sum+product.price,0)} </p>

                <p>Shipping Charge : ${cart&&cart.reduce((sum,product)=>sum+product.shipping,0)} </p>

                <p>Tax : ${(cart&&cart.reduce((sum,product)=>sum+product.price,0)*(7/100)).toFixed(2)} </p>

                <h3 className='text-lg font-bold my-2'>Grand Total : $ {cart&&cart.reduce((sum,product)=>sum+product.price+product.shipping,0)+cart.reduce((sum,product)=>sum+product.price,0)*(7/100)}</h3>

                <button className='bg-red-600 rounded-lg px-5 py-2 text-white font-semibold mt-4'> Clear Cart</button>
                

            </div>
        </section>
    );
};

export default Products;