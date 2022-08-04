import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Favicon from 'react-favicon';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';

import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter> 
    <Favicon url="https://cdn-icons-png.flaticon.com/512/5968/5968866.png" />
    <Provider store={store}>  
        <App />     
        </Provider>    
    </BrowserRouter>  
  </React.StrictMode>
);

