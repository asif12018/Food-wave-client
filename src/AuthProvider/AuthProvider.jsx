import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from './../firebase/firebase.config';

export const AuthContext = createContext(null);


const AuthProvider = ({children}) => {
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    //create user function
    const createUser = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }

    //user login function
    const userSignin = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    //google signin function
    const googleSignIn = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }
    //logout function
    const userLogout = ()=>{
        setLoading(true);
        return signOut(auth)
    }

    //update profile


    //observer function
    useEffect(()=>{
       const unSubscribe = () =>{
        onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser)
                
                setLoading(false)
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              
              // ...
            } else {
                setLoading(false)
                setUser(null)
              // User is signed out
              // ...
            }
          });
       }

       return () => unSubscribe()
    },[])

    const authInfo = {createUser, userSignin, user, setUser, userLogout, googleSignIn, loading}

    return (
        <AuthContext.Provider value={authInfo}>
           {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;