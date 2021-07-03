import React from 'react';
import { useState } from 'react';
import { useHistory } from "react-router-dom";
import { Image }  from 'react-bootstrap';
import {ItemCount} from '../itemCount/ItemCount';
import { Button }  from 'react-bootstrap';


export const ItemDetail = ({ item }) => {
    const [stock, setStock] = useState(5);
    const [initial, setInitial] = useState(0);
    const [show, setShow] = useState(false);
    const [count, setCount] = useState(0);
    let history = useHistory();
   
    const onAdd = (quantity) => {
      alert("Agregado al carro" + quantity);
      setCount(quantity);
    }

    const finPurcharse=() => {
        history.push("/cart");
    }

    return (
        <>
            <div>
                <Image src="http://placekitten.com/200/300" roundedCircle />
                <h4>Categoria</h4>    
                <p>{item.category}</p>              
                <h4>Detalle</h4>    
                <p>{item.detail}</p>
                <h4>Precio U$S: {item.price}</h4>
                {!count && <ItemCount initial={initial} stock={stock} onAdd={onAdd} />}
                {!!count && <Button variant="secondary"  onClick={() => finPurcharse()} >Termina tu Compra</Button>}
            </div>
        </>
    )
}

export default ItemDetail;