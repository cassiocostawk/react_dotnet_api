import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./views/App.js";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Clientes from "./views/Clientes";
import Cliente from "./views/Cliente";
import Pagina404 from "./views/Pagina404";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} exact />
      <Route path="/clientes" element={<Clientes />} />
      <Route path="/clientes/:id" element={<Cliente/>} />
     
      <Route path="/clientes/novo" element={<Cliente />} />
      <Route path="*" element={<Pagina404 />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
