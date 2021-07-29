import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/cartContext/CartContext';
import { Link } from 'react-router-dom';
import { Button, Container, Table, ButtonGroup, Alert }  from 'react-bootstrap';
import { EndPurcharse } from '../endPurcharse/EndPurcharse'

export const Cart = () => {
    const { removeItem, clear } = useContext(CartContext)
    const {cart, setCart } = useContext(CartContext);
    const { totalAmount, setTotalAmount} = useContext(CartContext);
    const [loading, setLoading] = useState(false)

    const completaCompra = () => {
        setLoading(true);
    }
    return (
        <>
        <Container>
            <h1> Cart </h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Codigo</th>
                            <th>Nombre</th>
                            <th>Precio U$S</th>
                            <th>Cantidad</th>
                            <th>SubTotal</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {   cart.map((articulo) => (
                        <>
                        <tr>
                            <td><Link to={`/item/${articulo.id}`}>{articulo.id}</Link></td>
                            <td>{articulo.name}</td>
                            <td>{articulo.price}</td>
                            <td>{articulo.cant}</td>
                            <td>{articulo.cant * articulo.price}</td>
                            <td><Button variant="danger" type="submit" onClick={() => removeItem(articulo)}>Eliminar</Button></td>
                        </tr>                            
                        </>
                       ))}                            
                        <tr>
                            <td colSpan="4">Total</td>
                            <td>{totalAmount}</td>
                        </tr>                            
                    </tbody>                    
                </Table>                    
            <ButtonGroup aria-label="Basic example">
                <Link to="/" >
                    <Button variant="light" href="/cart"> Volver </Button>
                </Link>
                <Button variant="success" type="submit" onClick={() => completaCompra()}>Finalizar Compra</Button>
                <Button variant="danger" href="/" type="submit" onClick={() => clear()}>Limpiar el Carro </Button>
            </ButtonGroup>

        </Container>
        {loading ? <EndPurcharse /> :<Alert variant='success'>Finalice su Compra</Alert>} 
        
       </>
        
    )
}
export default Cart;
