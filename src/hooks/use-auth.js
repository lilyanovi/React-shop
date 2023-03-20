import { useSelector } from 'react-redux';
import { selectUser } from '../store/auth/selector';

export function useAuth() {
    const {email, token, id, name, subscribe, comments, applications, phone} = useSelector(selectUser);

    return {
        isAuth: !!email,
        isAdmin: id === 'fwbrRhbukeb2RIvbMM6AbYZzUgn1',
        email,
        token,
        id,
        name,
        subscribe,
        comments,
        applications,
        phone
    };
}