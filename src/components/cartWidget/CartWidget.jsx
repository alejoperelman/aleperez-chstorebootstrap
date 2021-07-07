import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/cartContext/CartContext';
import { FaShoppingCart } from "react-icons/fa";

export const CartWidget = () => {
    const { itemCount } = useContext(CartContext)
    return (
        <>
            <div className="itemsOnCard">
            <FaShoppingCart />
            <b>{itemCount()}</b>
            </div>
        </>
    )
}

export default CartWidget;