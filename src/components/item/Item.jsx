import React from 'react';
import {useState} from 'react';
import { ItemCount } from '../itemCount/ItemCount'
import { Card, Button }  from 'react-bootstrap'

export const Item = ({id, nombre, precio}) => {
    const [stock, setStock] = useState(5)
    const [initial, setInitial] = useState(1)
    function onAdd () {
            alert("Agregado al Carro")
    }

    return (
    <>
        <Card style={{ width: '20rem' }}>
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <Card.Text>
                    Precio U$S {precio}
                </Card.Text>
                <ItemCount initial={initial} stock={stock} onAdd />
                <Button variant="primary">Detalles</Button>
                <Button onClick={ () => {onAdd()}} variant="danger">Agregar Al Carro</Button>
            </Card.Body>
        </Card>
    </>
    )
}

export default Item;