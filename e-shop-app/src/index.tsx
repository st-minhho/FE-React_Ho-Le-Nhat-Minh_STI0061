import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
//import { CartProvider } from './CartContext';

import './stylesheet/style.scss'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <CartProvider> */}
        <App />
      {/* </CartProvider> */}
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
