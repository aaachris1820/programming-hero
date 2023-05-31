import { createContext, useEffect, useState } from 'react';

import auth from '../../firebase-config'

import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext(null);

const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {

            setUser(currentUser);
            setLoading(false);
        });

        return () => unsubscribe();
    }, [])

    const signUpWithEmail = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInWithEmail = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const providerGoogle = new GoogleAuthProvider();
    const signInWithGoogle = () => {
        return signInWithPopup(auth, providerGoogle);
    }

    const signOutUser = () => {
        return signOut(auth);
    }

    const contexts = {
        user, loading, setLoading, signInWithEmail, signUpWithEmail, signInWithGoogle, signOutUser
    };

    return (
        <AuthContext.Provider value={contexts}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;