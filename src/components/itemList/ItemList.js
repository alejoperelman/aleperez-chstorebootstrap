import React from 'react';
import { Item } from '../../components/item/Item'
import { useState } from 'react';

export const ItemList = ({listadoItems}) => {
    return (
        <>
        <div className="productos">
           {listadoItems.map((articulo) =>  <Item id={articulo.id} nombre={articulo.name} precio={articulo.price}/>)}
        </div>           
        </>
    )
}
export default ItemList;
  