import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IniciarSesion from "./layout/iniciarSesion";
import Layout from "./layout/Layout";
import Inicio from "./pages/Inicio";
import LoginForm from "./pages/LoginForm";
import NuevoCliente from "./pages/NuevoCliente";
import EditarCliente from "./pages/EditarCliente";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IniciarSesion />}>
          <Route index element={<LoginForm />} />
        </Route>
        <Route path="/clientes" element={<Layout />}>
          <Route index element={<Inicio />} />
          <Route path="nuevo" element={<NuevoCliente />} />
          <Route path="editar/:id" element={<EditarCliente />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
