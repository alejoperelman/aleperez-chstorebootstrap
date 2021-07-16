import React, { Fragment } from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/cartContext/CartContext';
import { FaShoppingCart } from "react-icons/fa";
import { Button, Badge }  from 'react-bootstrap';

export const CartWidget = () => {
   const { totalItems } = useContext(CartContext)
    return (
        <>
                <FaShoppingCart />
                <Badge bg="secondary">{ totalItems }</Badge>
        </>
    )
}

export default CartWidget;