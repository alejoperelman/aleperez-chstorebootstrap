import { createContext, useEffect, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [totalAmount, setTotalAmount] = useState(0)
    const [totalItems, setTotalItems] = useState(0)
    
    const addItem = (item, qnty ) => {
        const {id, name, category, detail, price} = item;
        const newCart = cart;
//        setTotalItems(parseint(totalItems) + parseInt(qnty));
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

    // function itemCount () {
    //     //Aca quizas se podria usar reduce en cart con el campo cant
    //     let total=0;
    //         for(let i = 0; i <= cart.length; i++) total+=cart[i];
    //         return total
    // }

    // function isEmpty() {
    //     if (cart.length > 0) { 
    //         console.log("tiene Items")
    //         return false
    //     } else {
    //         console.log("NO tiene Items")
    //         return true
    //     }
    // }

        // const getOrder - () = {}

    // function totalCardItems () {
    //     if (cart.length > 0){
    //         let totItems = (cart.map(obj => (obj.price * obj.qnty)))
    //         return totItems.reduce((acc,cur) => acc + cur)
    //     }
        
    // }