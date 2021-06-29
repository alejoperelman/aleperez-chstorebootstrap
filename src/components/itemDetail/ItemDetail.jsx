import React from 'react';
import { Image }  from 'react-bootstrap'

export const ItemDetail = ({ item }) => {
    return (
        <>
            <div>
                <Image src="http://placekitten.com/200/300" roundedCircle />
                <h4>Categoria</h4>    
                <p>{item.category}</p>              
                <h4>Detalle</h4>    
                <p>{item.detail}</p>
                <h4>Precio U$S: {item.price}</h4>    
            </div>
        </>
    )
}

export default ItemDetail;