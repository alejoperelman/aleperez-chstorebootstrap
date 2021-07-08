// import { Children } from 'react'
import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]) 

    const addItem = (item, qnty ) => {
        const {id, name, category, detail, price} = item;
        if (cart.length > 0){
            if (isInCart(id)) { 
                //Aca deberia acumular la cantidad
                const inCartItem = cart.filter(item => item.id == id).reduce((cant)  => item.cant +  qnty )
                //  const cartTotal = cart.reduce((total, { price = 0 }) => total + price, 0);
            } else {
                setCart([...cart,  {id, name, price, cant: qnty }]);
            }
    }else{
        setCart([...cart,  {id, name, price, cant: qnty }]);
    }
    }

    const clear = () => {
        setCart([]);
    }

    function isInCart (id) {
        return cart.some((prod) => prod.id == id )
    }
   
    function itemCount () {
        //Aca quizas se podria usar reduce en cart con el campo cant

        let total=0;
            for(let i = 0; i <= cart.length; i++) total+=cart[i];
            return total
    }

    function isEmpty() {
        if (cart.length > 0) { 
            console.log("tiene Items")
            return false
        } else {
            console.log("NO tiene Items")
            return true
        }
    }

    function removeItem (item) {
        let hardCopy = [...cart];
        hardCopy = hardCopy.filter((cartItem) => cartItem.id !== item.id);
        setCart(hardCopy);
    }

return (
        <CartContext.Provider value={{ cart, addItem, isInCart, itemCount, isEmpty }}>
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
        

