import React from 'react';
import {useState} from 'react';
import { ItemCount } from '../itemCount/ItemCount'
import { ItemList } from '../itemList/ItemList'

const articulos = [
    { id: 1, name: "Mouse", price: 10 },
    { id: 2, name: "Notebook" , price: 100},
    { id: 3, name: "PC" , price: 70 }
  ];
  
export const ItemListContainer = () => {
    const [items, setItems] = useState([])  
    const solicitoItems = new Promise((resolve, reject) => {
        setTimeout (() => {
            console.log ("Estableciendo Conexion...")
            resolve(articulos)
        },2000)
        })
        solicitoItems.then (
            articulos => { 
               console.log ("Conexion Establecida...")
               setItems(articulos)
            },
            error => {
                console.log ("Sin Conexion...")
            }
            );
    return (
        <>
            <h1>Listado de Productos</h1>
            <div className="contenedorItems">
                <ItemList listadoItems={items}/>
            </div>
        </>
    )
}

export default ItemListContainer;