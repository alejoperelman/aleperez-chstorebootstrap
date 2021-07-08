// import { Children } from 'react'
import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  
    const [cart, setCart] = useState([]) 

    const addItem = (item, qnty ) => {
        const {id, name, category, detail, price} = item;
        if (isInCart(id)) {
            console.log("Esta en Cart")
            setCart({... cart, idProd:id, cantidad: qnty})
            console.log(cart)
        } else {
            console.log("No esta en Cart")
            setCart({idProd:id, cantidad: qnty})
        }
    }

    const clear = () => {
        setCart([]);
    }

    function isInCart (id) {
        return cart.some((prod) => prod.idProd == id )
    }
   
    function itemCount () {
        let total=0;
            for(let i = 0; i <= cart.length; i++) total+=cart[i];
            console.log(total);
        return total
    }

return (
        <CartContext.Provider value={{ cart, addItem, isInCart, setCart, itemCount }}>
            {children}
        </CartContext.Provider>
        )
}