import React, { createContext, useState } from 'react';
import Header from './component/Header';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

let CartContext=createContext([]);

const App = () => {
  const [cart,setCart]=useState([]);
  console.log(cart); 
  return (
    <>
    <CartContext.Provider value={cart}>
    <Header></Header>
    </CartContext.Provider>
    
    <ToastContainer pauseOnHover={false} autoClose={3000}></ToastContainer>
    <CartContext.Provider value={[cart,setCart]}>
      <Outlet></Outlet>
    </CartContext.Provider>
    
      
    </>
  );
};

export  {App,CartContext};