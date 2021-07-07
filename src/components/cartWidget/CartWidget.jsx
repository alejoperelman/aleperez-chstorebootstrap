import React from 'react';
import { FaShoppingCart } from "react-icons/fa";

export const CartWidget = () => {
    return (
        <>
            <div className="itemsOnCard">
            <FaShoppingCart />
            4
            </div>
        </>
    )
}

export default CartWidget;