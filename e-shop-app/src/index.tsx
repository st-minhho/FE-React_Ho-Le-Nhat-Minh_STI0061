import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import './stylesheet/style.scss'
import App from './App';
import { Provider } from 'react-redux';
// import store from './app/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
);

reportWebVitals();
