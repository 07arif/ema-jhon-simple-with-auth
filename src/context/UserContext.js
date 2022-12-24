import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import app from '../firebase/firebase.init.config';


export const AuthContext = createContext();
const auth = getAuth(app)


const UserContext = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading,setLoading]=useState(true)

    //create User:
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //Login User:
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    //Logout:
    const Logout = () => {
        setLoading(true)
        return signOut(auth)
    }

    //Current User Set
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser)
            setUser(currentUser)
            setLoading(false)
        });
        return unsubscribe;

    }, [])

    const authInfo = { user,loading, createUser, loginUser, Logout }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;