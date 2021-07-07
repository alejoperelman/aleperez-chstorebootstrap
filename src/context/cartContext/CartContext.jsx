// import { Children } from 'react'
import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addItem = (item) => {
        const {id, name, category, detail, price} = item;
        const existe = isInCart(item.id);

        console.log("id en isInCart" + id)
        if (existe) {
            console("Esta en Cart");
        } else {
            setCart({...cart, item });
            console("No esta en Cart");
        }
        //Buscar un item en cart y sumar cantidades
        console(cart);
    }

    const removeItem = (item) => {
    //Buscar un item en cart y eliminarlo
    //item = items.find(item => item.id == id)
    }

    const clear = () => {
        setCart([]);
    }

    const isInCart = (id) => {
        return cart.some( prod => prod.id == id )
     }
    
     const  itemCount = (item) => {
        //retorna la cantidad de articulos en el carro
        //para mostrar en el componente del carro
    }

return (
        <CartContext.Provider value={{ cart, addItem, isInCart, setCart, itemCount }}>
            {children}
        </CartContext.Provider>
        )
}


