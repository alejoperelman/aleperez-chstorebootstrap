import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container }  from 'react-bootstrap';


export const Cart = () => {
    return (
        <>
        <Container>
       <h1> Cart </h1>
       <h3> Proximamente </h3>
        <Link to="/" >
            <Button variant="light" href="/cart"> Volver </Button>
        </Link>
        </Container>
       </>
    )
}

export default Cart;