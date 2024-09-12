import { createContext, useState } from 'react';

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({children}) => {

    const [count, setCount] = useState(0);
    const [user, setUser] = useState({});
    

    //carrito de compras
    const [products, setCardProducts] = useState([]);

    return (
        <ShoppingCartContext.Provider value = {{
            count,
            setCount,
            products, 
            setCardProducts,
            user,
            setUser
        }}>
            {children}  
        </ShoppingCartContext.Provider>
    )
}