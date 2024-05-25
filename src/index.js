import './index.css';
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom/client'; // Importación corregida
import App from './App';
import ApolloClientProvider from './apollo-client';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container); // Uso de createRoot desde react-dom/client

root.render(
  <ApolloClientProvider>
    <App />
  </ApolloClientProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
