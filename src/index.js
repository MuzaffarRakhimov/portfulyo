import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './frontend/app.js';
import { BrowserRouter} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
      
  </React.StrictMode>
);




// The route handler syntax depends on your backend framework
