import React from 'react';
//import { render } from 'react-dom';
//import { ItemCount } from '../../components/itemCount/ItemCount'
const articulos = [
    { id: 1, name: "Mouse", price: 10 },
    { id: 2, name: "Notebook" , price: 100},
    { id: 3, name: "PC" , price: 70 }
  ];

export const ItemList = () => {
        const solicitoItems = new Promise((resolve, reject) => {
            setTimeout (() => {
                console.log ("Estableciendo Conexion...")
                resolve(true)
            },3000)
            })
            solicitoItems.then (
                item => { 
                   console.log ("Conexion Establecida...")
                   //console.log (articulos.map(articulos))
                },
                error => {
                    console.log ("Sin Conexion...")
                }
                );
           return (
            <div className="items">
                <h1>Items</h1>
            </div>
            );
}
export default ItemList;
  