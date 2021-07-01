import React from 'react';
import { Item } from '../item/Item'
//import { useState } from 'react'
import { Container, Row }  from 'react-bootstrap'

export const ItemList = ({listadoItems}) => {
    return (
        <>
            <Row>
                {listadoItems.map((articulo) =>  <Item key={articulo.id} nombre={articulo.name} detalle={articulo.detail} precio={articulo.price}/>)}
            </Row>
        </>
    )
}
export default ItemList;
  