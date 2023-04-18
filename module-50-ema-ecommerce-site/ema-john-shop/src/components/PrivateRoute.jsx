import React, { useContext } from 'react';
import { AuthContext } from '../AuthContextProvider';
import { Navigate } from 'react-router-dom';
import Loading from './Loading';

const PrivateRoute = ({children}) => {
    const {user,currentLocation,loading}=useContext(AuthContext);
    if(loading){
        return <Loading/>
    }
    return (
        <>
        {user?<>{children
        }</>:
        <Navigate to='/login' state={{from:currentLocation?.pathname}} replace />
        }
        </>
    );
};

export default PrivateRoute;