import React from 'react';

export const ItemDetail = ({id, nombre, detalle, precio}) => {
    return (
        <>
            <div>
                <h3>{nombre}</h3>    
                <h4>Detalle</h4>    
                <p>{detalle}</p>
                <h4>Precio U$S: {precio}</h4>    
            </div>
        </>
    )
}

export default ItemDetail;