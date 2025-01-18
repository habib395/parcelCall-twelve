import React from 'react';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
import LoadingSpinner from '../pages/Shared/LoadingSpinner';

const PrivateRoute = ({ children }) => {
    const { user, loading} = useAuth()
    const location = useLocation()

    if(loading) return <LoadingSpinner></LoadingSpinner>
    if(user) return children
    return <Navigate to='/login' state={{ from: location}}
    replace='true'></Navigate>
}

export default PrivateRoute;