import { useState, useEffect } from 'react';


export const ItemCount = (props) => {
    const [count, setCount] = useState(0);
 
    useEffect(() => {
      // Actualiza el título del documento usando la API del navegador
      document.title = `Clickeaste  veces`;
      
    });

    function CountClick () {
      setCount(count +1);
      console.log(props.stock + " - " + props.initial + " " + count)
      if (props.stock >= props.initial && props.stock >= {count} ){
        console.log("Sumando a Pedido")
        
      } else {
        console.log("Stock Insuficiente")
      }
        //console.log(props.stock +" " + props.initial)
      }

    return (
    <div>
      <button onClick={CountClick}>+</button>
      <button onClick={CountClick}>-</button>
      
    </div>
    )
}

export default ItemCount;