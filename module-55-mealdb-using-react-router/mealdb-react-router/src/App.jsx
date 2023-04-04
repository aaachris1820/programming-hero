import React from 'react';
import { Outlet,Link } from 'react-router-dom';

const App = () => {
  return (
  <>
    <div>
      <Link to="/" className='text-4xl block text-center my-10 bg-black text-white font-bold w-5/12 mx-auto'><span className='text-red-500'>MealDB</span> Restaurant</Link>
    </div>
    <Outlet></Outlet>
  </>

  );
};

export default App;