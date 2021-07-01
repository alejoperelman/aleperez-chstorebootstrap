import React from 'react';
import {useState} from 'react';
import { Spinner } from 'react-bootstrap'
import './Loading.css'

export const Loading = () => {
    return (
    <div className="divPadre">
        <div className="divHijo">
        <Spinner animation="border" role="status">
            <span className="sr-only">Cargando...</span>
        </Spinner>
        </div>
    </div>
    )
}

export default Loading;

