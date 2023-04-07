import React from 'react';
import { Link,NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <header>
            <nav className='flex justify-between items-center mx-auto w-10/12 py-8 gap-x-52 gap-y-6 flex-wrap'>
                <Link to='/' className='text-4xl  font-bold '>Fake <span className='text-red-500'> Shop</span></Link>
                <div className='font-bold text-lg flex gap-5    '>
                    <NavLink to="shop" className={ ({isActive})=>isActive==true?'nav-links-active':'hover:text-orange-500 px-3 py-2'} >Shop</NavLink>

                    <NavLink to="order" className={({isActive})=>isActive==true?'nav-links-active':'hover:text-orange-500 px-3 py-2'}>Order</NavLink>

                    <NavLink to="about" className={({isActive})=>isActive==true?'nav-links-active':'hover:text-orange-500 px-3 py-2'}>About</NavLink>
                </div>
            </nav>
            <hr className='w-11/12 mx-auto' />
        </header>
    );
};

export default Header;