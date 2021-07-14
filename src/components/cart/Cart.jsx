import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/cartContext/CartContext';
import { Link } from 'react-router-dom';
import { Button, Row, Container }  from 'react-bootstrap';

export const Cart = () => {
    //const { isEmpty } = useContext(CartContext)
    //const { clear } = useContext(CartContext)
    const { removeItem, clear } = useContext(CartContext)
    const {cart, setCart } = useContext(CartContext);
    return (
        <>
        <Container>
            <h1> Cart </h1>
            <h3> Actualmente Testing </h3>
            {/* si no hay items mostrar mensaje de que no hay articulos */}
            
                {   cart.map((articulo) => (
                    <Row>
                        <div key={articulo.id}>
                            {`${articulo.name}: $${articulo.price} Cantidad: ${articulo.cant}`}
                            <Button variant="danger" type="submit" onClick={() => removeItem(articulo)}>Eliminar</Button>
                        </div>
                    </Row>
                ))}
            <Link to="/" >
                <Button variant="light" href="/cart"> Volver </Button>
            </Link>
            <Button variant="danger" href="/" type="submit" onClick={() => clear()}>Limpiar el Carro </Button>
        </Container>
       </>
    )
}
export default Cart;
