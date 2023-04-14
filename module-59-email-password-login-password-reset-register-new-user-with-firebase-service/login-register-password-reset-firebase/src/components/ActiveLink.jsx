import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({children,to}) => {
    return (
        <NavLink to={to} className={({isActive})=>isActive?"text-blue-500 font-bold text-xl ":'text-xl font-semibold text-slate-700'}>{children}</NavLink>
    );
};

export default ActiveLink;