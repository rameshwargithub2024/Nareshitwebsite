import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components2/Home.jsx";
import Products from "./components2/products.jsx";
import { Header } from "./components2/header.jsx";
import Register from "./components2/resgister.jsx";
import { useCookies } from "react-cookie";
import { useState } from "react";

function App() {



  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Register/>}/>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/Products" element={<Products/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
