import React from 'react';
import { useState } from 'react';
import { Button }  from 'react-bootstrap'

export const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(initial);
    
    const CountClick = (operador) => { 
      if (operador==='+') {
          if(stock > count) {
            setCount(count +1)
          }
      } else {
          if (count > 1 ) {
            setCount(count -1)
          }
      }
    }

    return (
    <div>
      <Button onClick={() => CountClick('+')}>+</Button>
      <Button onClick={() => CountClick('-')}>-</Button>
      <p>Cantidad: { count }</p>
      <Button disabled={  count  > 0 ? false : true } onClick={onAdd} variant="danger">Agregar al Carrito</Button>
    </div>
    )
}

export default ItemCount;