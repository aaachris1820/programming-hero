import React from 'react';
import logo from '../images/Logo.svg'
import { NavLink,Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className='bg-slate-800 px-16 mb-[50px]'>
             <div className="flex  text-white flex-wrap items-center py-6 gap-6">
  <div className="flex-1">
    <Link to="/">
      <img src={logo} alt="" className='w-[180px]'/>
    </Link>
        
  </div>
  <div className="">
    <ul className="flex flex-wrap gap-6 px-1 ">
      <li><NavLink to="order" >Order</NavLink ></li>
      <li >
        <NavLink to="order-review">Order Review</NavLink >
      </li>
      <li><NavLink to="manage-inventory">Manage Inventory</NavLink ></li>
      <li><NavLink to="login">Login</NavLink ></li>
    </ul>
  </div>
</div>
        </nav>
    );
};

export default Nav;