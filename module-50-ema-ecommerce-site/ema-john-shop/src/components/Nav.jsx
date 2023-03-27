import React from 'react';
import logo from '../images/Logo.svg'
const Nav = () => {
    return (
        <nav className='bg-slate-800 px-16 mb-[50px]'>
             <div className="navbar  text-white">
  <div className="flex-1">
        <img src={logo} alt="" className='w-[180px]'/>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1 ">
      <li><a>Shop</a></li>
      <li >
        <a>Orders</a>
      </li>
      <li><a>Inventory</a></li>
      <li><a>Login</a></li>
    </ul>
  </div>
</div>
        </nav>
    );
};

export default Nav;