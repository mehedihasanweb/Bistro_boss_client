import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {users, loading} = useContext(AuthContext)
    const location = useLocation()

    if(loading){
        return <h2>Loading...</h2>
    }

    if(users){
        return(children)
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>;
};

export default PrivateRoute;