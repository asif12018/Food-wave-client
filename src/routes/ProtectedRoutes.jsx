import { useContext, useState } from 'react';
import { AuthContext } from './../AuthProvider/AuthProvider';
import { Navigate, useLocation } from "react-router-dom";
import { BounceLoader } from "react-spinners";
const ProtectedRoutes = ({ children }) => {
    const location = useLocation();
    //data from context api
    const { user, loading } = useContext(AuthContext);
    // console.log(loading)
    const color = '#95d230';
    const [redirect, setRedirect] = useState(false);
    if (loading) {
        return <BounceLoader color={color} />
    }
    if (user) {
        return children
    }
    //condition to delay redirect
    if (!user) {
        setTimeout(() => {
            setRedirect(true);
        }, 400);
    }
    return (
        <>
            {
                redirect || <div className="h-screen flex justify-center items-center ">
                    <BounceLoader color={color}></BounceLoader>
                </div>
            }

            {
                redirect && <Navigate to={'/login'} state={location.pathname}></Navigate>
            }
        </>
    );
};

export default ProtectedRoutes;