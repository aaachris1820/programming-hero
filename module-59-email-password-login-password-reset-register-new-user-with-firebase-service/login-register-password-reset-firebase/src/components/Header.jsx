import React from 'react';
import ActiveLink from './ActiveLink';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='flex w-10/12 mx-auto justify-between gap-y-6 gap-x-10 items-center mt-12 mb-20 flex-wrap'>
            <Link to='/' className='text-4xl font-bold text-slate-700'>Firebase <span className='text-green-500'>Login</span> <span className='text-red-500'>+</span>  <span className='text-yellow-400'>Register</span> </Link>
            <div className='flex gap-6'>
                <ActiveLink to={"/login"}>Login</ActiveLink>
                <ActiveLink to={"/register"}>Register</ActiveLink>
            </div>

        </nav>
    );
};

export default Header;