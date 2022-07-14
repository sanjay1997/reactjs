import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./auth/Login";
import Home from "./components/Home";
import Addpass from "./components/Addpass";
import Editpass from "./components/Editpass";
import Notfound from "./components/Notfound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="/add" element={<Addpass />} />
        <Route path="/edit/:id" element={<Editpass />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
