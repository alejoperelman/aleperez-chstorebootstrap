import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Image, Button, Container, Table }  from 'react-bootstrap';
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
                    <Image src="https://firebasestorage.googleapis.com/v0/b/coderhose-apstore.appspot.com/o/1.jpg?alt=media&token=bb5d866d-6295-42e2-b9a2-143be695afdc" roundedCircle />
                    <h4>Categoria</h4>    
                    <p>{item.category}</p>              
                    <h4>Detalle</h4>    
                    <p>{item.detail}</p>
                    <h4>Precio U$S: {item.price}</h4>
                    {!show && <ItemCount initial={1} stock={10} onAdd={onAdd} />}
                    {show && <Link to="/cart">Termina tu Compra</Link>}
            </Container>
        </>
    )
}

export default ItemDetail;