import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../../firebase/firebase-config';

export const AuthContext=createContext(null);

const AuthContextProvider = ({children}) => {

    const [user,setUser]=useState(null);

    const loginHandler=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }

    const context={user,setUser,}

    useEffect(()=>{
        
    },[])
    return (
        <>
        <AuthContext.Provider value={context}>
        {children}
        </AuthContext.Provider>
        
        </>
    );
};

export default AuthContextProvider;