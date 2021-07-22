import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ItemDetail } from '../itemDetail/ItemDetail'
import { Loading } from '../loading/Loading'
import { database } from '../../firebase/firebase'

export const ItemDetailContainer = () => {
    const { id } = useParams ()
    const [item, setItem] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        console.log(id)
        const ItemCollection = database.collection("articulos");
        const getItem = ItemCollection.doc(id);
        getItem.get().then((doc) => {
                if (!doc.exists) {
                    console.log("Sin resultados");
                    return;
                }
                setItem({id: doc.id, ...doc.data()});
            }).catch((error) => {
                console.log("Error buscando datos", error);
            }).finally(() => {
                setLoading(false)
            })
    }, [id])
    return (
       <>
        <section className="contenedorDetalles">
            {loading ? <Loading /> :<ItemDetail item={item} /> } 
        </section>
       </>
    )
}
export default ItemDetailContainer;