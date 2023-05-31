import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Header from './components/Header/Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <ToastContainer autoClose={1500} hideProgressBar={true}></ToastContainer>
      <ScrollRestoration></ScrollRestoration>
    </>
  );
};

export default App;