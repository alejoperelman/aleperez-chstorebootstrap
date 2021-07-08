import React from 'react';
import { useState } from 'react';
import { Link }   from 'react-router-dom'
import { ItemCount } from '../itemCount/ItemCount'
import { Card, Button, Modal }  from 'react-bootstrap'
import { ItemDetailContainer } from '../itemDetailContainer/ItemDetailContainer'

export const Item = ({id, nombre, detalle, precio}) => {
    const [stock, setStock] = useState(5)
    const [initial, setInitial] = useState(0)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const onAdd = () => {
      alert("Agregado al carro")
    }

    return (
    <>
        <Card style={{ width: '20rem' }}>
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <Card.Text>
                    Precio U$S {precio}
                </Card.Text>
                <Link to={`/item/${id}`}>
                  <Button onClick={handleShow} variant="primary">Detalles</Button>
                </Link>
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
          <ItemDetailContainer />
        </Modal.Body>
        </Modal>            

    </>
    )
}

export default Item;