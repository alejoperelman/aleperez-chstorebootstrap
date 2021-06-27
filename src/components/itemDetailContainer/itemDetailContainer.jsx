import React from 'react';
import {useState} from 'react';
//import { ItemCount } from '../itemCount/ItemCount'
import { ItemDetail } from '../itemDetail/ItemDetail'
import { Button, Modal } from 'react-bootstrap'

const articulos = [
    { id: 1, name: "Mouse", detail: "Mouse Inalambrico", price: 10 },
    { id: 2, name: "Notebook", detail: "HP EliteBook G8", price: 1000},
    { id: 3, name: "PC", detail: "Intel NUC Mini PC", price: 700 },
    { id: 4, name: "Telefono", detail: "Samsung S20, 5G, 12GB", price: 150 },
    { id: 5, name: "Tablet" , detail: "iPad Air 2021, LTE WIFI", price: 170},
    { id: 6, name: "AIO", detail: "Lenovo i5, 8GB de Ram, 240SSD, Nvidia Video", price: 700 }
  ];

export const ItemDetailContainer = ({idProd }) => {
    const [itemId, setItem] = useState(0)
    const [itemName, setName] = useState("") 
    const [itemDetail, setDetail] = useState("") 
    const [itemPrice, setPrice] = useState(0) 
    const buscoItem = new Promise((resolve, reject) => {
        setTimeout (() => {
            console.log ("Cargando Detalles")
            resolve()
        },2000)
        })
        buscoItem.then (
            detalles => {
                console.log ("Detalles Prontos")
            },
            error => {
                console.log ("No es Posible Cargar Detalles")
            }
            );
    return (
       <>
        <div className="contenedorDetalis">
            <ItemDetail /> 
        </div>
       </>
    )
}

export default ItemDetailContainer;