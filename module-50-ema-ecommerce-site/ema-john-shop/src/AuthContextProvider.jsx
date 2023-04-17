import React, { createContext, useEffect, useState } from 'react';
import auth from './firebase-config/firebase-config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';

export const AuthContext=createContext(null);

const AuthContextProvider = ({children}) => {

    const createNewUserWithEmail=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const loginWithEmail=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
        });

    },[]);

    const [user,setUser]=useState(null);

    const contexts={user,setUser,createNewUserWithEmail,loginWithEmail};

    return (
        <AuthContext.Provider value={contexts}>{children}</AuthContext.Provider>
    );
};

export default AuthContextProvider;