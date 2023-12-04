import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import {  ToastContainer } from "react-toastify";




ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <ToastContainer  position="bottom-right" theme="dark" />
    </BrowserRouter>
  </React.StrictMode>
);
