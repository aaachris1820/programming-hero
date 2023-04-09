import React, { useContext } from 'react';
import { Link,NavLink } from 'react-router-dom';
import { CartContext } from '../App';


const Header = () => {
    const cart=useContext(CartContext);

    return (
        <header>
            <nav className='flex justify-between items-center mx-auto w-10/12 py-8 gap-x-52 gap-y-6 flex-wrap'>
                <Link to='/' className='text-4xl  font-bold bg-yellow-400 px-6 py-2 rounded-md'>Fake <span className='text-red-500'> Shop</span></Link>
                <div className='font-bold text-lg flex gap-5    '>
                    <NavLink to="shop" className={ ({isActive})=>isActive==true?'nav-links-active':'hover:text-orange-500 px-3 py-2'} >Shop</NavLink>

                    <NavLink to="cart" className={({isActive})=>isActive==true?'nav-links-active':'hover:text-orange-500 px-3 py-2'}>Cart <sup className='bg-pink-600 text-white px-2 rounded-full font-extrabold '> {cart.reduce((sum,item)=>sum+Object.values(item)[0],0)} </sup> </NavLink>

                    <NavLink to="about" className={({isActive})=>isActive==true?'nav-links-active':'hover:text-orange-500 px-3 py-2'}>About</NavLink>
                </div>
            </nav>
            <hr className='w-11/12 mx-auto' />
        </header>
    );
};

export default Header;