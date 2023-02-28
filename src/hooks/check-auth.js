import { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { selectToken, selectRememberMe } from '../store/auth/selector'
import { removeUser } from '../store/auth/action';

export function useCheckAuth() {
    const dispatch = useDispatch();
    const token = useSelector(selectToken);
    const rememberMe = useSelector(selectRememberMe);

    useEffect(() => {
      const expirationDate = localStorage.getItem('expirationDate');
    
      if(expirationDate && new Date().getTime() > expirationDate) {
        dispatch(removeUser());
      }
    }, [dispatch])

    useEffect(() => {
      if (!token && rememberMe) {
        dispatch(removeUser());
      }
    }, [dispatch, token, rememberMe])

    return null
  }