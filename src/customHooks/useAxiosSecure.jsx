import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";



const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials:true
})

const useAxiosSecure = () => {
   const navigate = useNavigate();
   const {userLogout} = useContext(AuthContext);
   useEffect(()=>{
    axiosSecure.interceptors.response.use(res =>{
         return res;
    }, error =>{
        console.log('error tracked in the interceptor',error);
        if(error.response.status === 401 || error.response.status === 403){
            userLogout()
            .then(() => {
                console.log('unauthorized thats the reason user logout')
                navigate('/login')
              }).catch((error) => {
                // An error happened.
                console.log(error)
              });
        }
    })
   },[])
   return axiosSecure;
};

export default useAxiosSecure;