import { createContext, useEffect, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [totalAmount, setTotalAmount] = useState(0)
    const [totalItems, setTotalItems] = useState(0)
    
    const addItem = (item, qnty ) => {
        const {id, name, category, detail, price} = item;
        const newCart = cart;
        if (cart.length > 0){
            if (isInCart(id)) { 
                let index = cart.findIndex(obj => obj.id === id )
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
        return cart.some((prod) => prod.id == id )
    }
   
    useEffect(() => {
        const nextTotal = cart
            .map(({ price, cant }) => price * cant)
            .reduce(
                (cartTotalPrice, currentItemPrice) => cartTotalPrice + currentItemPrice,
                0
            )
    setTotalAmount(nextTotal)

        const totalCant = cart
            .map(({ cant }) => cant)
            .reduce(
                (cartTotalItems, currentItemItem) => cartTotalItems + currentItemItem,
                0
            )
    setTotalItems(totalCant)
    }, [cart])
    
    function removeItem (item) {
        let hardCopy = [...cart];
        hardCopy = hardCopy.filter((cartItem) => cartItem.id !== item.id);
        setCart(hardCopy);
    }

return (
        <CartContext.Provider value={{ cart, totalAmount, totalItems, addItem, isInCart, clear, removeItem  }}>
            {children}
        </CartContext.Provider>
        )
}
