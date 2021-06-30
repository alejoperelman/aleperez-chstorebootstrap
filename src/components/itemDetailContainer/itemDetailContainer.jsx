import React from 'react';
import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { ItemDetail } from '../itemDetail/ItemDetail'

// const articulos = [
//     { id: 1, name: "Mouse Genius", category: "Hardware" ,detail: "Mouse inalámbrico Genius NX-7000 con tecnología BlueEye, para una elevada precisión de rastreo y puede usarse sobre casi cualquier superficie.", price: 10 },
//     { id: 2, name: "Notebook HP", category: "Hardware", detail: "HP ENVY X360 con procesador AMD Ryzen 5", price: 1000},
//     { id: 3, name: "Intel NUC", category: "Hardware", detail: "Las Mini-PCs Intel® NUC hacen que un potente procesador, una memoria veloz y un gran almacenamiento comparable al de los equipos de desktop de tamaño regular más recientes quepan en los formatos más pequeños que podemos diseñar.", price: 700 },
//     { id: 4, name: "Samsung S20", category: "Hardware", detail: "Descubre Galaxy S20, S20+ y S20 Ultra. Con la Captura de Video en 8K que cambia tu forma de capturar no solo videos, sino también fotos, y una velocidad que cambia la forma de compartirlos.1 Al agregar la seguridad Samsung Knox, una batería inteligente, un procesador potente y una capacidad masiva de almacenamiento, la serie Galaxy S20 presenta un universo completamente nuevo para dispositivos móviles.", price: 1200 },
//     { id: 5, name: "iPad Air" , category: "Hardware", detail: "El iPad Air es más capaz que una computadora, y todo lo hace de una forma más mágica y sencilla. Y ahora, con aún más funcionalidades y capacidades, es más versátil que nunca.", price: 170},
//     { id: 6, name: "AIO Lenovo", category: "Hardware", detail: "Procesador: Intel Core i3-10100 Pantalla: 21.5 Full HD (1920x1080) Memoria: 8GB DDR4 3200 Mhz SODIMM (Máx. 64GB) Disco: 256GB M.2 2280 PCIe TLC Segundo disco: Admite segundo disco 2,5 Gráficos: Intel UHD graphics 630 Puertos: 4xUSB 3.2 Gen 1 (one supports Smart Power On), 1xRJ-45, 1x DP, 1xUSB 3.2 Gen 1, 1xUSB 3.2 Gen 2, 1xUSB-C 3.2 Gen 1 (5V/3A charging), 1xheadphone / microphone combo jack (3.5mm)+ incluye adaptador DP-HDMI Sistema Operativo: Windows 10 PRO 64 Cámara", price: 700 },
//     { id: 7, name: "Windows 11" , category: "Software", detail: "Windows 11 ofrece un espacio tranquilo y creativo en el que puedes dedicarte a lo que te apasiona a través de una experiencia totalmente nueva. Desde un menú Inicio revitalizado hasta nuevas maneras de conectarte con tus personas, favoritas, noticias, juegos y contenido... Windows 11 es el lugar donde pensar, expresarte y crear de manera natural.", price: 150},
//     { id: 8, name: "Red Hat Linux 8", category: "Software", detail: "Red Hat Enterprise Linux 8 es el sistema operativo inteligente para la nube híbrida. Todas las cargas de trabajo. Todos los entornos. Un solo sistema operativo.", price: 700 },
//     { id: 9, name: "Hosting", category: "Servicios", detail: "Mejor Servicio con más del 96% de aprobación desde 2004. Hosting y Dominio Todo Incluido. Tu Sitio Necesita Mejor Servicio de Hosting Sin Problemas. Necesitas Crecer Hoy! 6 Niveles de Seguridad", price: 50 },
//     { id: 10, name: "Azure Database", category: "Servicios", detail: "Utilice una base de datos relacional como servicio para hospedar aplicaciones de alto rendimiento controladas por datos.", price: 700 }
//   ];

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
                    // if (id==undefined){
                    //     setItem(articulos)
                    //     console.log (articulos)
                    //     console.log ("Id sin definir")
                    //    } else {
                    //     const categoryItems = articulos.filter(item => item.id == id)
                    //     setItem(categoryItems)
                    // }
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
            {console.log(item)}
            <ItemDetail item={item} /> 
        </section>
       </>
    )
}

export default ItemDetailContainer;