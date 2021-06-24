import React from 'react';
import {useState} from 'react';
import { ItemCount } from '../../components/itemCount/ItemCount'
import { ItemList } from '../../components/itemList/ItemList'

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
            <ItemList listadoItems={items}/>
        </>
    )
}

export default ItemListContainer;