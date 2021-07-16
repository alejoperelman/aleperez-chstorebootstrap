import React from 'react';
import { Item } from '../item/Item'
import { Container, Row }  from 'react-bootstrap'

export const ItemList = ({listadoItems}) => {
    return (
        <>
        <Container>
            <Row>
                {listadoItems.map((articulo) =>  <Item id={articulo.id} nombre={articulo.name} detalle={articulo.detail} precio={articulo.price}/>)}
            </Row>
        </Container>
        </>
    )
}
export default ItemList;
  