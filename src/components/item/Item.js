import React from 'react';
import {useState} from 'react';
import { ItemCount } from '../../components/itemCount/ItemCount'
import { Card, Button }  from 'react-bootstrap'

export const Item = ({id, nombre, precio}) => {
    const [stock, setStock] = useState(5)
    const [initial, setInitial] = useState(1)
    return (
    <>
        { console.log( {nombre})}
        <Card style={{ width: '20rem' }}>
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <Card.Text>
                    Articulo promocional Precio U$S {precio}
                </Card.Text>
                <ItemCount initial={initial} stock={stock} onAdd />
                <Button variant="primary">Detalles</Button>
                <Button variant="danger">Comprar</Button>
            </Card.Body>
        </Card>
    </>
    )
}

export default Item;