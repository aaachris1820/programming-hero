import React, { createContext, useEffect, useState } from 'react';
import auth from './firebase-config/firebase-config';
import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { useLocation } from 'react-router-dom';

export const AuthContext=createContext(null);

const AuthContextProvider = ({children}) => {
    const currentLocation=useLocation();
    const [loading,setLoading]=useState(true);

    const sendVerificationEmail=()=>{
        return sendEmailVerification(auth.currentUser);
    }

    const createNewUserWithEmail=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const loginWithEmail=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const signOutUser=()=>{
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            console.log(currentUser?.emailVerified);
            if(currentUser?.emailVerified)
                setUser(currentUser);
            else if(!currentUser){
                setUser(currentUser);
            }
            setLoading(false);
        });
        
   
        return ()=>unsubscribe();
    },[]);

    const [user,setUser]=useState(null);

    const contexts={user,setUser,createNewUserWithEmail,loginWithEmail,signOutUser,currentLocation,loading,sendVerificationEmail};

    return (
        <AuthContext.Provider value={contexts}>{children}</AuthContext.Provider>
    );
};

export default AuthContextProvider;