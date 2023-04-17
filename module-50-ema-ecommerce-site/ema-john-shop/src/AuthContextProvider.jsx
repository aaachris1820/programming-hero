import React, { createContext, useEffect, useState } from 'react';
import auth from './firebase-config/firebase-config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';

export const AuthContext=createContext(null);

const AuthContextProvider = ({children}) => {

    const createNewUserWithEmail=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const loginWithEmail=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }

    const signOutUser=()=>{
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
        });

    },[]);

    const [user,setUser]=useState(null);

    const contexts={user,setUser,createNewUserWithEmail,loginWithEmail,signOutUser};

    return (
        <AuthContext.Provider value={contexts}>{children}</AuthContext.Provider>
    );
};

export default AuthContextProvider;