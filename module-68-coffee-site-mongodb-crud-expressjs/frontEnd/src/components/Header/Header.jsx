import React from 'react';
import logo from '../../assets/more/logo1.png'
import { useNavigate } from 'react-router-dom';

const Header = () => {

    const navigate=useNavigate();

    return (
        <header className="bg-amber-950 py-6 flex justify-center items-center gap-x-2">
            
            <img src={logo} alt="brand logo" className='w-16' />
            <h1 className='font-bold text-6xl font-["Rancho"] text-white ' onClick={()=>navigate('/')}>Espresso Emporium</h1>

        </header>
    );
};

export default Header;