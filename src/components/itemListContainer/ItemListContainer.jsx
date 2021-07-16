import React from 'react';
import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { ItemList } from '../itemList/ItemList'
import { Container } from 'react-bootstrap'
import { Loading } from '../loading/Loading'
import { database } from '../../firebase/firebase'

export const ItemListContainer = () => {
    const {id} = useParams ()
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false)
    
    useEffect(() => {
        setLoading(true)
        const itemCollection = database.collection("articulos");
        itemCollection.get().then ((querySnapshot) => {
            if(querySnapshot.size === 0) {
                console.log("Sin resultados");
                return
            }
            setItems(querySnapshot.docs.map(doc => ({id: doc.id, ...doc.data()})));
        }).catch((error) => {
            console.log("Error buscando Items", error);
        }).finally(() => {
            console.log("Tengo datos");
            setLoading(false);
        });
    },[id])      

    return (
        <>
        <Container>
            <h1>Listado de Productos</h1>
             {loading ? <Loading /> :<ItemList listadoItems={items}/> } 
        </Container>
        </>
    )
}
export default ItemListContainer;