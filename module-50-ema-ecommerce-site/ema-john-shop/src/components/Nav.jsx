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
    <ul className="flex flex-wrap gap-6 px-1 font-bold">
      <li><NavLink to="order" className={({isActive})=>isActive?'bg-yellow-500 px-4 py-2 rounded-lg font-bold text-gray-800 tracking-wide':''} >Order</NavLink ></li>
      <li >
        <NavLink to="order-review"  className={({isActive})=>isActive?'bg-yellow-500 px-4 py-2 rounded-lg font-bold text-gray-800 tracking-wide':''}>Order Review</NavLink >
      </li>
      <li><NavLink to="manage-inventory"  className={({isActive})=>isActive?'bg-yellow-500 px-4 py-2 rounded-lg font-bold text-gray-800 tracking-wide':''}>Manage Inventory</NavLink ></li>
      <li><NavLink to="login"  className={({isActive})=>isActive?'bg-yellow-500 font-bold text-gray-800 tracking-wide px-4 py-2 rounded-lg':''}>Login</NavLink ></li>
      <li><NavLink to="signup"  className={({isActive})=>isActive?'bg-yellow-500 font-bold text-gray-800 tracking-wide px-4 py-2 rounded-lg':''}>Sign Up</NavLink ></li>
    </ul>
  </div>
</div>
        </nav>
    );
};

export default Nav;