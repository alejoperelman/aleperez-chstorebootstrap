import React from 'react';
import { Link }   from 'react-router-dom'
import { Card, Button  }  from 'react-bootstrap'

export const Item = ({id, nombre, precio}) => {
    return (
    <>
        <Card style={{ width: '20rem' }}>
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <Card.Text>
                    Precio U$S {precio}
                </Card.Text>
                <Link to={`/item/${id}`}>
                  <Button variant="primary">Detalles</Button>
                </Link>
            </Card.Body>
        </Card>
    </>
    )
}

export default Item;