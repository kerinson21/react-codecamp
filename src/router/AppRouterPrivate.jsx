import { useContext } from 'react';
import { ShoppingCartContext } from '../context/index';
import { Navigate } from 'react-router-dom';

export const AppRouterPrivate = ({children}) => {
    const context = useContext(ShoppingCartContext);
    return (context.user != {}) ? children : <Navigate to={'/auth/login'}/>
}
