import React from 'react';
import { Image }  from 'react-bootstrap'

export const ItemDetail = ({id, nombre, detalle, precio}) => {
    return (
        <>
            <div>
                <Image src="http://placekitten.com/200/300" roundedCircle />
                <h4>Detalle</h4>    
                <p>{detalle}</p>
                <h4>Precio U$S: {precio}</h4>    
            </div>
        </>
    )
}

export default ItemDetail;