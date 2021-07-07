// import { Children } from 'react'
import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addItem = (item, qnty ) => {
        const {id, name, category, detail, price, quantity} = item;
        if (isInCart(item.id)) {
            console.log("Esta en Cart")
            // !quantity &&  quantity = 0
            console.log(  item.quantity + " >-< " + qnty )
            item.quantity = item.quantity + qnty
            setCart(item)
        } else {
            console.log("No esta en Cart")
            cart.push(item)
        }
        console.log("Entre a funcion addItem")
        console.log("largo:" + cart.length)
        console.log(itemCount())

    }

    
    
    const clear = () => {
        setCart([]);
    }

    function isInCart (id) {
        console.log("Entre a funcion isInCart")
        console.log(cart.find( prod => prod.id == id ))
        return cart.find( prod => prod.id == id )
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

 
    
    
    
    
    
    // const removeItem = (item) => {
    //     const {id, name, category, detail, price, quantity} = item;

    //     if (isInCart(item.id)) {
    //         console.log("Esta en Cart");
    //         let carttemp = carttemp.filter(function(carttemp) {
    //              carttemp.id !== item.id
    //              return
    //         })
    //         setCart(carttemp)   
    //     }
    // //Buscar un item en cart y eliminarlo
    // //item = items.find(item => item.id == id)
    // }



