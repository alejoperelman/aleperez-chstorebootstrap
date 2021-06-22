import { useState } from 'react';

export const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(0);

    function CountClick () {
      console.log( stock  + " - " + initial + " " + count)
      if ( stock > count ){
        alert("Item Agregado")
        setCount(count +1);
      } else {
        alert("Stock Insuficiente")
      }
   }
    return (
    <div>
      <button onClick={CountClick}>+</button>
      <button onClick={CountClick}>-</button>
      <h1>Cantidad de Articulos {count} </h1>
      <p></p>
    </div>
    )
}

export default ItemCount;