import React from 'react';
import logo from '../../assets/logo.svg'
import ActiveLink from './ActiveLink';

const NavBar = () => {
    return (
        <nav className='w-10/12 mx-auto flex justify-between items-center flex-wrap gap-x-36 gap-y-6'>

            <img src={logo} alt="brand logo of car doctor" />

            <div className='flex gap-x-4 gap-y-6 flex-wrap'>

                <ActiveLink to={'/'}>Home</ActiveLink>

                <ActiveLink to={'/about'}>About</ActiveLink>

                <ActiveLink to={'/services'}>Services</ActiveLink>

                <ActiveLink to={'/blog'}>Blog</ActiveLink>

                <ActiveLink to={'/contact'}>Contact</ActiveLink>

            </div>

            <div>
                <button className='text-orange-500 font-bold border-2 rounded-lg border-orange-400 px-6 py-3'>Appointment</button>
            </div>

        </nav>
    );
};

export default NavBar;