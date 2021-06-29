import React from 'react';
import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { ItemDetail } from '../itemDetail/ItemDetail'

const articulo = 
{   id: 1,
    name: "Mouse Genius",
    category: "Hardware" ,
    detail: "Mouse inalámbrico Genius NX-7000 con tecnología BlueEye, para una elevada precisión de rastreo y puede usarse sobre casi cualquier superficie.",
    price: 10
};

export const ItemDetailContainer = () => {
    const { id } = useParams ()
    const [item, setItem] = useState([])  

    useEffect(() => {
        const getItem = new Promise((resolve, reject) => {
            setTimeout (() => {
                console.log ("Cargando Detalles")
                resolve(articulo)
            },2000)
            })
            getItem.then (
                articulo => {
                    console.log ("Detalles Prontos")
                    setItem(articulo)
                },
                error => {
                    console.log ("No es Posible Cargar Detalles")
                }
                );
    }, [id])    
    return (
       <>
        <section className="contenedorDetalles">
            <ItemDetail item={item} /> 
        </section>
       </>
    )
}

export default ItemDetailContainer;