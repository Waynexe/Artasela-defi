import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Contact from "./components/Contact";
import Tutorial from "./components/Tutorial";
import Formulaires from "./components/Forms";
function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/forms" className="navbar-brand">
          Artasela
        </a>
        <div className="navbar-nav mr-auto">
        <li className="nav-item">
            <Link to={"#"} className="nav-link">
              Acceuil
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/forms"} className="nav-link">
              Formulaires
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"#"} className="nav-link">
              A Propos
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"#"} className="nav-link">
              Produits
            </Link>
          </li>
        </div>
      </nav>
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<Formulaires/>} />
          <Route path="/forms" element={<Formulaires/>} />
          <Route path="/add" element={<Contact/>} />
          <Route path="/users/:id" element={<Tutorial/>} />
        </Routes>
      </div>
    </div>
  );
}
export default App;