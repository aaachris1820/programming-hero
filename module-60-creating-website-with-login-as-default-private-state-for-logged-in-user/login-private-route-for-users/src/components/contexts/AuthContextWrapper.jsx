import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../../firebase-config/firebase-config'


export const AuthContext=createContext(null);

const AuthContextWrapper = ({children}) => {

    const [user,setUser]=useState(null);
    const createUserWithEmail=async(email,password)=>{
        try{
            const newUser=await createUserWithEmailAndPassword(auth,email,password);
        
        return newUser;}
        catch{(error)=>console.log(error.message)}
    }
    const signInWithEmail=async(email,password)=>{
        try{
            const userExists=await signInWithEmailAndPassword(auth,email,password);
            return userExists;
        }
        catch{(error)=>console.log(error.message)}
    }

    const signOutUser=()=>{
        return signOut(auth);
    }

    const contexts={user,createUserWithEmail,setUser,signInWithEmail,signOutUser}

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth, currentUser=>{
                setUser(currentUser);
        });

        return ()=>unsubscribe();
    },[])

    return (
        <AuthContext.Provider value={contexts}>{children}</AuthContext.Provider>
    );
};

export default AuthContextWrapper;