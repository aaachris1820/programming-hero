import React, { useContext } from 'react';
import logo from '../images/Logo.svg'
import { NavLink,Link } from 'react-router-dom';
import { AuthContext } from '../AuthContextProvider';

const Nav = () => {
  const {user,signOutUser}=useContext(AuthContext);

  const handleSignOut=()=>{
    signOutUser();
  }

    return (
        <nav className='bg-slate-800 px-16 mb-[50px]'>
             <div className="flex  text-white flex-wrap items-center py-6 gap-6">
  <div className="flex-1">
    <Link to="/">
      <img src={logo} alt="" className='w-[180px]'/>
    </Link>
        
  </div>
  <div className="">
    <ul className="flex flex-wrap gap-6 px-1 font-bold items-center">
      <li><NavLink to="order" className={({isActive})=>isActive?'bg-yellow-500 px-4 py-2 rounded-lg font-bold text-gray-800 tracking-wide':''} >Order</NavLink ></li>
      <li >
        <NavLink to="order-review"  className={({isActive})=>isActive?'bg-yellow-500 px-4 py-2 rounded-lg font-bold text-gray-800 tracking-wide':''}>Order Review</NavLink >
      </li>
      <li><NavLink to="manage-inventory"  className={({isActive})=>isActive?'bg-yellow-500 px-4 py-2 rounded-lg font-bold text-gray-800 tracking-wide':''}>Manage Inventory</NavLink ></li>
      {user?<li>
        <button onClick={handleSignOut} className='bg-yellow-500 text-black rounded-lg py-2 px-2'>Sign Out</button>
      </li>
      :
      <>
   <li><NavLink to="login"  className={({isActive})=>isActive?'bg-yellow-500 font-bold text-gray-800 tracking-wide px-4 py-2 rounded-lg':''}>Login</NavLink ></li>

      <li><NavLink to="signup"  className={({isActive})=>isActive?'bg-yellow-500 font-bold text-gray-800 tracking-wide px-4 py-2 rounded-lg':''}>Sign Up</NavLink ></li>
      </>}
    </ul>
  </div>
</div>
        </nav>
    );
};

export default Nav;