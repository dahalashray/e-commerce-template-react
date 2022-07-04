import React from 'react';
import ReactDOM from 'react-dom';
import Register from './pages/entry/Register';
import Login from './pages/entry/Login';
import Home from './pages/home/Home';
import SingleProduct from './pages/product/SingleProduct';
import reportWebVitals from './reportWebVitals';
import "./index.css"

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
