import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from './../firebase/firebase.config';
import axios from "axios";

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
    // useEffect(()=>{
    //    const unSubscribe = () =>{
    //     onAuthStateChanged(auth, (currentUser) => {
    //         const userEmail = currentUser?.email || user?.email;
    //         const loggedUser = userEmail;
    //         if (currentUser) {
    //             setUser(currentUser)
                
    //             setLoading(false)
    //           // User is signed in, see docs for a list of available properties
    //           // https://firebase.google.com/docs/reference/js/auth.user
              
    //           // ...

    //           axios.post('http://localhost:5000/jwt', {email:loggedUser},{
    //             withCredentials:true
    //           })
    //           .then(res =>{
    //              console.log(res.data)
    //           })
    //           .catch(error =>{
    //              console.error(error)
    //           })
    //         } else {
    //             setLoading(false)
    //             setUser(null)
    //           // User is signed out
    //           // ...
    //           axios.post('http://localhost:5000/logout',loggedUser,{
    //             withCredentials:true
    //           })
    //           .then(res => {
    //              console.log(res.data)
    //           })
    //           .catch(error =>{
    //              console.error(error)
    //           })
    //         }
    //       });
    //    }

    //    return () => unSubscribe()
    // },[])
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            const userEmail = currentUser?.email || user?.email;
            const loggedUser = userEmail;
            console.log('this is email',loggedUser)
            setUser(currentUser);
            console.log('current user', currentUser);
            setLoading(false);
            //generating token if exist is login
            if(currentUser){
                
                axios.post('http://localhost:5000/jwt', {email:loggedUser},{
                    withCredentials:true
                })
                .then(res =>{
                    console.log(res.data);
                })
                .catch(err => {
                    console.error(err);
                });

            }else{
                
                axios.post('http://localhost:5000/logout',loggedUser,{
                    withCredentials:true
                })
                .then(res =>{
                    console.log(res.data)
                })
                .catch(err =>{
                    console.error(err)
                })
            }
        });
        return () => {
            return unsubscribe();
        }
    }, [user?.email])

    const authInfo = {createUser, userSignin, user, setUser, userLogout, googleSignIn, loading}

    return (
        <AuthContext.Provider value={authInfo}>
           {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;