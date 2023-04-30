import React from 'react';
import brandLogo from '../../assets/logo.png'
import MarqueeHeadline from './MarqueeHeadline';
import Navbar from './Navbar';

const Header = () => {
    return (
        <header>
            <div className='flex justify-center mt-12 mb-5'>
                <img src={brandLogo} alt="dragon news logo" />
            </div>
            <p className='text-center text-gray-400 text-lg'>Journalism Without Fear or Favour</p>
            <p className='text-center font-medium text-xl'>Sunday, November 27, 2022</p>

            <MarqueeHeadline></MarqueeHeadline>

            <Navbar></Navbar>

        </header>
    );
};

export default Header;