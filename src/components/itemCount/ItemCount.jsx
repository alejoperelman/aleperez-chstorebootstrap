import React from 'react';
import { useState } from 'react';
import { Button }  from 'react-bootstrap'

export const ItemCount = ({initial, stock, onAdd=()=>{} }) => {
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
      <Button variant="light" onClick={() => CountClick('+')}> + </Button>
      { count }
      <Button variant="light" onClick={() => CountClick('-')}> - </Button>
      <p></p>
      <Button disabled={  count  > 0 ? false : true } onClick={()=> onAdd(count)} variant="dark">Agregar al Carrito</Button>
    </div>
    )
}

export default ItemCount;