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
        if ( count >= 1 ){
          setMensaje("Item Restado")
          setCount(count -1);
        } else {
          setMensaje("No puede quitar el item, cantidad debe ser mayor o igual 0")
        }
        //aca deberia actualizar el carro con Count
      }

    }
    return (
    <div>
      <button onClick={ () => {CountClick("+")}}>+</button>
      <button onClick={ () => {CountClick("-")}}>-</button>
      <h6>Cantidad: {count} </h6>
      <p>{mensaje}</p>
    </div>
    )
}

export default ItemCount;