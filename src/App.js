import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Generate from "./Pages/Generate";
import Drafts from "./Pages/Drafts";
import Home from "./Pages/Home";
import Footer from "./Component/Footer";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar sticky-top">
        <div className="logo d-flex align-items-center">
          <img src="../images/logo.png" alt="Logo" className="logo-image" />
          <span className="logo-text ms-2 ">Content Studio</span>
        </div>
        <div className="nav-links">
          <Link to="/Home" className="nav-link">Home</Link>
          <Link to="/Generate" className="nav-link">Generator</Link>
          <Link to="/Drafts" className="nav-link">Drafts</Link>
        </div>
        <div className="nav-icons">
          <i className="fas fa-search icon"></i>
          <i className="fas fa-user-circle icon"></i>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/Home" element={<Home />} />
        <Route path="/Generate" element={<Generate />} />
        <Route path="/Drafts" element={<Drafts />} />
      </Routes>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
