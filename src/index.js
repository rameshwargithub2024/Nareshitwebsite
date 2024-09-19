import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Demo, ReactDemo } from './components/components';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import { ReducerDemo } from './components/demo';
import { FakestoreCarousel } from './components/Shoppers';
import { DEmo, LoadProduct } from './components';
import { FakeStore } from './components/axios';
import { MyApp } from './components/project';
import { Components } from './components2/component.jsx';
import { Main } from './components2/main.jsx';
import { Header } from './components2/header.jsx';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
