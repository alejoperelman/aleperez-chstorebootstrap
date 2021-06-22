import React from 'react';
import { render } from 'react-dom';
//import { ItemCount } from '../../components/itemCount/ItemCount'
const articulos = [
    { id: 1, name: "Mouse", price: 10 },
    { id: 2, name: "Notebook" , price: 100},
    { id: 3, name: "PC" , price: 70 }
  ];

export const ItemList = () => {
    render () {
        const solicitoItems = new Promise((resolve, reject) => {
            setTimeout (() => {
                console.log ("Dentro de TimeOut")
            },3000)
            console.log ("Fuera TimeOut")
            })
            
            solicitoItems.then (
                (item) => {
                    console.log ("PASO")
                },
                (error) => {
                    console.log ("Error")
                }
                );
           return (
            <div className="App">
                <h1>Items</h1>
                <h2>{item}</h2>
            </div>
            );
        }
}
export default ItemList;
  