import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useHistory } from "react-router-dom";
import { Image }  from 'react-bootstrap';
import { Button }  from 'react-bootstrap';
import { CartContext } from '../../context/cartContext/CartContext';
//import { isInCart } from '../../context/cartContext/CartContext';
import { ItemCount } from '../itemCount/ItemCount';


export const ItemDetail = ({ item }) => {
    const {cart, setCart } = useContext(CartContext);
    const [stock, setStock] = useState(5);
    const [initial, setInitial] = useState(0);
    const [show, setShow] = useState(false);
    const [count, setCount] = useState(0);
    let history = useHistory();
    const { isInCart } = useContext(CartContext)
    const [items, setItems] = useState([])
    
    const onAdd = (quantity) => {
      setCount(quantity);
    }

    const finPurcharse=( item ) => {
        const {id, name, category, detail, price} = item;
        let existe = true
        existe = isInCart(id)
        console.log("ID:" + id)
        console.log("Existe?:" + existe)
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
                {!!count && <Button variant="secondary"  onClick={() => finPurcharse(item)}>Termina tu Compra</Button>}
            </div>
        </>
    )
}

export default ItemDetail;