// import { Children } from 'react'
import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]) 
    
    const addItem = (item, qnty ) => {
        const {id, name, category, detail, price} = item;
        const newCart = cart;
        if (cart.length > 0){
            if (isInCart(id)) { 
                let index = cart.findIndex(obj => obj.item.id === item.id )
                newCart[index].cant = newCart[index].cant + qnty;
                setCart(newCart);
            } else {
                setCart([...cart,  {id, name, price, cant: qnty }]);
            }
        }else{
            setCart([...cart,  {id, name, price, cant: qnty }]);
        }
    }
    const clear = () => { cart.splice(0) }

    function isInCart (id) {
        console.log(id)
        console.log(cart)
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
        <CartContext.Provider value={{ cart, addItem, isInCart, itemCount, isEmpty, clear, removeItem }}>
            {children}
        </CartContext.Provider>
        )
}
