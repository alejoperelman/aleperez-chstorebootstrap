import React from 'react';
import {useState} from 'react';
import { ItemList } from '../itemList/ItemList'

const articulos = [
    { id: 1, name: "Mouse Genius", detail: "Mouse inalámbrico Genius NX-7000 con tecnología BlueEye, para una elevada precisión de rastreo y puede usarse sobre casi cualquier superficie.", price: 10 },
    { id: 2, name: "Notebook HP", detail: "HP ENVY X360 con procesador AMD Ryzen 5", price: 1000},
    { id: 3, name: "Intel NUC", detail: "Las Mini-PCs Intel® NUC hacen que un potente procesador, una memoria veloz y un gran almacenamiento comparable al de los equipos de desktop de tamaño regular más recientes quepan en los formatos más pequeños que podemos diseñar.", price: 700 },
    { id: 4, name: "Samsung S20", detail: "Descubre Galaxy S20, S20+ y S20 Ultra. Con la Captura de Video en 8K que cambia tu forma de capturar no solo videos, sino también fotos, y una velocidad que cambia la forma de compartirlos.1 Al agregar la seguridad Samsung Knox, una batería inteligente, un procesador potente y una capacidad masiva de almacenamiento, la serie Galaxy S20 presenta un universo completamente nuevo para dispositivos móviles.", price: 1200 },
    { id: 5, name: "iPad Air" , detail: "El iPad Air es más capaz que una computadora, y todo lo hace de una forma más mágica y sencilla. Y ahora, con aún más funcionalidades y capacidades, es más versátil que nunca.", price: 170},
    { id: 6, name: "AIO Lenovo", detail: "Procesador: Intel Core i3-10100 Pantalla: 21.5 Full HD (1920x1080) Memoria: 8GB DDR4 3200 Mhz SODIMM (Máx. 64GB) Disco: 256GB M.2 2280 PCIe TLC Segundo disco: Admite segundo disco 2,5 Gráficos: Intel UHD graphics 630 Puertos: 4xUSB 3.2 Gen 1 (one supports Smart Power On), 1xRJ-45, 1x DP, 1xUSB 3.2 Gen 1, 1xUSB 3.2 Gen 2, 1xUSB-C 3.2 Gen 1 (5V/3A charging), 1xheadphone / microphone combo jack (3.5mm)+ incluye adaptador DP-HDMI Sistema Operativo: Windows 10 PRO 64 Cámara", price: 700 }
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