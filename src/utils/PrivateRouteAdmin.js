import { useAuth } from '../hooks/use-auth';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRouteAdmin = ({ component }) => {
  
    const {isAdmin} = useAuth();

    if (!isAdmin) {
        return <Navigate to="/account" />;
    }

    return component ? component : <Outlet />;
};

export default PrivateRouteAdmin;