// import { Children } from 'react'
import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]) 

    const addItem = (item, qnty ) => {
        const {id, name, category, detail, price} = item;
        setCart([...cart, item]);
        if (isInCart({id})) { 
            console.log("Esta en Cart")
            //Aca deberia hacer la logica de la suma de item
            //que no se como es
        } else {
            console.log("No esta en Cart")
        }
        console.log (item)
        console.log({cart})
    }

    const clear = () => {
        setCart([]);
    }

    function isInCart (id) {
        return cart.some((prod) => prod.id == id )
    }
   
    function itemCount () {
        let total=0;
            for(let i = 0; i <= cart.length; i++) total+=cart[i];
            return total
    }

return (
        <CartContext.Provider value={{ cart, addItem, isInCart, itemCount }}>
            {children}
        </CartContext.Provider>
        )
}

        // if (isInCart(id)) {
        //     console.log("Esta en Cart")
        //     setCart({... cart, idProd:id, cantidad: qnty})
        //     console.log(cart)
        // } else {
        //     console.log("No esta en Cart")
        //     // setCart({idProd:id, cantidad: qnty})
        // }


                // if (isInCart(id)) {
        //     console.log("Esta en Carro")
        //     // const product = cart.find((i) => i.id === id);
        //     setCart({... cart, idProd:id, cantidad: qnty})
        // } else {
        //    console.log("No esta en Carro")
        //    setCart({... cart, idProd:id, cantidad: qnty})
        // }


        
    // function removeItem (item) {
    //     let hardCopy = [...cart];
    //     hardCopy = hardCopy.filter((cartItem) => cartItem.id !== item.id);
    //     setCart(hardCopy);
    // }
