import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({to,children}) => {
    return (
        <NavLink to={to} className={({isActive})=>isActive?"text-black border-b-4 border-b-orange-400 font-medium text-lg":"text-gray-400 font-medium text-lg"} >{children}</NavLink>
    );
};

export default ActiveLink;