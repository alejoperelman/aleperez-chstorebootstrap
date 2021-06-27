import React from 'react';
import {useState} from 'react';
import { ItemCount } from '../itemCount/ItemCount'
import { ItemList } from '../itemList/ItemList'

const articulos = [
    { id: 1, name: "Mouse", detail: "Mouse Inalambrico", price: 10 },
    { id: 2, name: "Notebook", detail: "HP EliteBook G8", price: 1000},
    { id: 3, name: "PC", detail: "Intel NUC Mini PC", price: 700 },
    { id: 4, name: "Telefono", detail: "Samsung S20, 5G, 12GB", price: 150 },
    { id: 5, name: "Tablet" , detail: "iPad Air 2021, LTE WIFI", price: 170},
    { id: 6, name: "AIO", detail: "Lenovo i5, 8GB de Ram, 240SSD, Nvidia Video", price: 700 }
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