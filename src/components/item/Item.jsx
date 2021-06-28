import React from 'react';
import {useState} from 'react';
import { ItemCount } from '../itemCount/ItemCount'
import { Card, Button, Modal }  from 'react-bootstrap'
import { ItemDetailContainer } from '../itemDetailContainer/ItemDetailContainer'


export const Item = ({id, nombre, detalle, precio}) => {
    const [stock, setStock] = useState(5)
    const [initial, setInitial] = useState(1)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    
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
                <Button onClick={handleShow} variant="primary">Detalles</Button>
                <Button onClick={ () => {onAdd()}} variant="danger">Agregar Al Carro</Button>
            </Card.Body>
        </Card>
        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
        >
        <Modal.Header closeButton>
          <Modal.Title>Detalle {nombre}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ItemDetailContainer id={id} nombre={nombre} detalle={detalle} precio={precio} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Agregar al Carro</Button>
        </Modal.Footer>
        </Modal>            

    </>
    )
}

export default Item;