import { useState } from 'react';

export const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(0);
    const [mensaje, setMensaje] = useState("");

    function CountClick () {
      if ( stock > count ){
        setMensaje("Item Agregado")
        setCount(count +1);
      } else {
        setMensaje("Stock Insuficiente")
      }
   }
    return (
    <div>
      <button onClick={CountClick}>+</button>
      <h1>Cantidad de Articulos {count} </h1>
      <p>{mensaje}</p>
    </div>
    )
}

export default ItemCount;