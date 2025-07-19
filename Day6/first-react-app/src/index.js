import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root')); //creates virtual DOM using method createRoot gets the root id from div element from public/index.html
root.render(
  // for security issue
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


