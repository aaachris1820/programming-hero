import React from 'react';
import NavbarLink from './NavbarLink';
import profileDefault from '../../assets/profile-user.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='mt-8 w-10/12 mx-auto flex  gap-12 items-center flex-wrap'>

            <div className='flex justify-center gap-4 flex-1'>
            <NavbarLink to={'/'}>Home</NavbarLink>
            <NavbarLink to={'/about'}>About</NavbarLink>
            <NavbarLink to={'/career'}>Career</NavbarLink>
            </div>

            <div className='flex gap-4 items-center'>
                <img src={profileDefault} alt="profile image" className='w-12' />
                <Link to={'/login'} className='bg-gray-700 text-white font-semibold py-2 px-8'>Login</Link>
            </div>
        </div>
    );
};

export default Navbar;