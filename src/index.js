import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes } from './pages/routes';
import { CartProvider } from './context/cartContext/CartContext'

ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
      <Routes />
    </CartProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

