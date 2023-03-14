import { useSelector } from 'react-redux';
import { selectUser } from '../store/auth/selector';

export function useAuth() {
    const {email, token, id, name, subscribe, reviews, applications, phone} = useSelector(selectUser);

    return {
        isAuth: !!email,
        email,
        token,
        id,
        name,
        subscribe,
        reviews,
        applications,
        phone
    };
}