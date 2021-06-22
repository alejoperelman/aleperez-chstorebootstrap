import { useState } from 'react';

export const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(0);
    const [mensaje, setMensaje] = useState("");

    function CountClick (operador) {
      if (operador ==="+")
      {
        if ( stock > count ){
          setMensaje("Item Agregado")
          setCount(count +1);
        } else {
          setMensaje("Stock Insuficiente")
        }
      }
      else
      {
        if ( count > 0 ){
          setMensaje("Item Restado")
          setCount(count -1);
        } else {
          setMensaje("No puede quitar el item, cantidad debe ser mayor a 0")
        }
      }

    }
    return (
    <div>
      <button onClick={ () => {CountClick("+")}}>+</button>
      <button onClick={ () => {CountClick("-")}}>-</button>
      <h3>Cantidad de Articulos {count} </h3>
      <p>{mensaje}</p>
    </div>
    )
}

export default ItemCount;