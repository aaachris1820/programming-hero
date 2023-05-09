import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';


const App = () => {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
    </>
  );
};

export default App;