import React from 'react';
import {useState} from 'react';
import { ItemCount } from '../../components/itemCount/ItemCount'
/*import { ItemList } from '../../components/itemList/ItemList'*/

export const ItemListContainer = () => {
    const [stock, setStock] = useState(5)
    const [initial, setInitial] = useState(1)

    return (
        <>
                <h1>Tus Productos Pronto Aqui</h1>
            {   /*<ItemList />  */}    
                <ItemCount initial={initial} stock={stock}/>
        </>
    )
}

export default ItemListContainer;