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
          <Badge style={{ variant: totalItems === 0 ? 'success' : 'danger' }}> {totalItems} </Badge>
        </>
    )
}

export default CartWidget;

{/* 
<Badge variant={ totalItems ? "info" : "Danger"}>{ totalItems }</Badge>
 */}