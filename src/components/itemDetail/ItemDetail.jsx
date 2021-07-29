import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Image, Badge , Container }  from 'react-bootstrap';
import { CartContext } from '../../context/cartContext/CartContext';
import { ItemCount } from '../itemCount/ItemCount';
import { Link } from "react-router-dom";

export const ItemDetail = ({ item }) => {
    const [show, setShow] = useState(false);
    const { addItem  } = useContext(CartContext)
    const onAdd = (quantity) => {
      setShow(true);
      addItem(item, quantity);
    }
    return (
        <>
            <Container>
                    <p></p>
                    <h3>{item.name}</h3>
                    <Image src={item.pictureUrl} thumbnail />
                    <p>Categoria: <Badge variant="info">{item.category}</Badge></p>              
                    <h4>Detalle</h4>    
                    <p>{item.detail}</p>
                    <h4>Precio U$S: {item.price}</h4>
                    {!show && <ItemCount initial={1} stock={item.stock} onAdd={onAdd} />}
                    {show && <Link to="/cart">Termina tu Compra</Link>}
            </Container>
        </>
    )
}

export default ItemDetail;