import { useState, useEffect } from 'react';

export const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(0);
 
    useEffect(() => {
      // Actualiza el título del documento usando la API del navegador
      //document.title = `Clickeaste  veces` + { count };
    });

    function CountClick () {
      setCount(count +1);
      console.log( stock  + " - " + initial + " " + count)
      if ( stock >= count ){
        alert("Item Agregado")
      } else {
        alert("Stock Insuficiente")
        setCount(count -1);
      }
   }
    return (
    <div>
      <button onClick={CountClick}>+</button>
      <button onClick={CountClick}>-</button>
    </div>
    )
}

export default ItemCount;