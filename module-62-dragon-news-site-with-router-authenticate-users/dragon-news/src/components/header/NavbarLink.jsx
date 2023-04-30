import React from 'react';
import { NavLink } from 'react-router-dom';

const NavbarLink = ({to,children}) => {
    return (
        <NavLink to={to} className='text-gray-400 text-lg'>{children}</NavLink>
    );
};

export default NavbarLink;