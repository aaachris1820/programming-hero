import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContextWrapper';
import { getAuth, signOut } from 'firebase/auth';


const PrivateHeader = ({setCurrentUser}) => {
    const {setUser,user}=useContext(AuthContext);
    const navigate=useNavigate();
    const handleSignOut= ()=>{
        const auth=getAuth();

         signOut(auth);
         setUser(auth.currentUser);
         setCurrentUser(auth.currentUser);
         console.log(user)
        if(auth.currentUser===null)
            navigate('/');
    }
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li></li>
        <li tabIndex={0}>
          
        </li>
        <li></li>
      </ul>
    </div>
    <Link to='/' className="btn btn-ghost normal-case text-xl">Practice Website</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li></li>
      <li> </li>
      <li></li>
    </ul>
  </div>
  <div className="flex gap-6 navbar-end">
    <Link className='btn btn-primary font-bold' to='/' onClick={handleSignOut}>Sign Out</Link>
  </div>
</div>
    );
};

export default PrivateHeader;