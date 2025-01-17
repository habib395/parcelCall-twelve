import { Navigate } from 'react-router-dom';
import useRole from '../hooks/useRole';

const DeliveryManRoute = ({ children }) => {
    const [role, isLoading] = useRole()
    
    if(role === 'deliveryMan') return children
    return <Navigate to='/dashboard' replace='true'></Navigate>
};

export default DeliveryManRoute;