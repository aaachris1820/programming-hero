import React, { useEffect, useState } from 'react';
import OrderSummary from './OrderSummary';
import Meals from './Meals';
import { getLocalCart, setLocalCart, setLocalCartIncaseNotExist, setLocalCartToState } from '../utilities/utitlities';
const Main = () => {
    const [meals,setMeals]=useState([]);
    const [cart,setCart]=useState([]);
    useEffect(()=>{
        const loadData=async()=>{
            const res=await fetch('https://themealdb.com/api/json/v1/1/search.php?f=b');
            const data=await res.json();
            setMeals(data.meals);
        }
        loadData();

        setLocalCartIncaseNotExist();

        let storedCart=getLocalCart();

        setLocalCartToState(storedCart,setCart);

        

    },[]);

    const handleAddToCart=(meal)=>{
        let storedCart=getLocalCart();

        let newMeal=storedCart.find(x=>x.idMeal===meal.idMeal);

        if(newMeal){
            return;
        }

        storedCart=[...storedCart,meal];
            
        setLocalCart(storedCart);
        setLocalCartToState(storedCart,setCart);
    }

    return (
        <main>
            <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",columnGap:"16px"}}>
                <Meals allmeals={meals} handleAddToCart={handleAddToCart} ></Meals>
                <OrderSummary cart={cart} ></OrderSummary>

            </div>
        </main>
    );
};

export default Main;