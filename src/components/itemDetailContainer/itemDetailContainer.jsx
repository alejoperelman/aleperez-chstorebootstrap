import React from 'react';
//import { ItemCount } from '../itemCount/ItemCount'
import { ItemDetail } from '../itemDetail/ItemDetail'

export const ItemDetailContainer = ({id, nombre, detalle, precio}) => {
    const buscoItem = new Promise((resolve, reject) => {
        setTimeout (() => {
            console.log ("Cargando Detalles")
            resolve()
        },2000)
        })
        buscoItem.then (
            detalles => {
                console.log ("Detalles Prontos")
            },
            error => {
                console.log ("No es Posible Cargar Detalles")
            }
            );
    return (
       <>
        <div className="contenedorDetalis">
            <ItemDetail id={id} nombre={nombre} detalle={detalle} precio={precio} /> 
        </div>
       </>
    )
}

export default ItemDetailContainer;