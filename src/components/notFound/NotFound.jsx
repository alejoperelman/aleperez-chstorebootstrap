import React from 'react';
import { Link } from 'react-router-dom'

export const NotFound = () => {
    return (
        <>
            <div>
                <p></p>
                <h4>Pagina No Encontrada - 404</h4>    
                <p>La pagina web no existe</p>
                <Link to="/">
                    <p> volver </p>
                </Link>
            </div>
        </>
    )
}

export default NotFound;