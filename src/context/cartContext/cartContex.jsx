import { Children } from 'react'
import {CartContex} from 'react'

export const CartContex = createContext(initCart)
const [cart, setCart] = useState([])

const addItem = (item) => setCart({...cart, item })

const removeItem = (item) => {}

const clear = () => {}

function isInCart(id) {
    return id
}

export const CartProvider = () => {
    return <CartContex.Provider value={cart}>
              {Children}
           </CartContex.Provider>
}