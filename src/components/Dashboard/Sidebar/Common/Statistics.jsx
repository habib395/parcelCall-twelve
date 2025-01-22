import { Navigate } from 'react-router-dom';
import LoadingSpinner from '../../../../pages/Shared/LoadingSpinner';
import useRole from './../../../../hooks/useRole';
// import AdminStatistics from '../../Statistics/AdminStatistics';

const Statistics = () => {
    const [role, isLoading] = useRole()
  if (isLoading) return <LoadingSpinner />
  if (role === 'customer') return <Navigate to='/dashboard/my-order' />
  if (role === 'deliveryMan') return <Navigate to='/dashboard/my-delivery' />
    return (
        <div>
              {/* {role === 'admin' && <AdminStatistics />} */}
        </div>
    );
};

export default Statistics;