import React from 'react';
import { Item } from '../../components/item/Item'
import { useState } from 'react';

export const ItemList = ({listadoItems}) => {
    return (
        <>
            <h1>Hola</h1>
           {listadoItems.map((articulo) =>  <Item id={articulo.id} nombre={articulo.name} precio={articulo.price}/>)}
        </>
    )
}
export default ItemList;
  