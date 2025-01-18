import { Navigate } from 'react-router-dom';
import useRole from '../hooks/useRole';
import LoadingSpinner from '../pages/Shared/LoadingSpinner';

const DeliveryManRoute = ({ children }) => {
    const [role, isLoading] = useRole()

    if(isLoading) return <LoadingSpinner></LoadingSpinner>
    
    if(role === 'deliveryMan') return children
    return <Navigate to='/dashboard' replace='true'></Navigate>
};

export default DeliveryManRoute;