
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/use-auth';

const PrivateRoute = ({ component }) => {
  
    const {isAuth, isAdmin} = useAuth();

    if (!isAuth) {
        return <Navigate to="/login" />;
    } else if (isAdmin) {
        return <Navigate to="/admin" />;
    }

    return component ? component : <Outlet />;
};

export default PrivateRoute;