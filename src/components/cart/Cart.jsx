import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/cartContext/CartContext';
import { Link } from 'react-router-dom';
import { Button, Row, Container }  from 'react-bootstrap';


export const Cart = () => {
    const {cart, setCart } = useContext(CartContext);
    return (
        <>
        <Container>
        <h1> Cart </h1>
        <h3> Actualmente Testing </h3>
        {/* si no hay items mostrar mensaje de que no hay articulos */}
        <Row>
                {cart.map((articulo) =>  <div> - <b>{articulo.id}</b> - {articulo.name} - {articulo.detail} - {articulo.price}</div> )}
        </Row>
       
        <Link to="/" >
                <Button variant="light" href="/cart"> Volver </Button>
            </Link>
        </Container>
       </>
    )
}

export default Cart;

       {/* const listItems = cart.map((el) => (
        <div key={el.id}>
            {`${el.name}: $${el.price}`}
        </div> )); */}