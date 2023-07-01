import React, { useState, useEffect, } from "react";
import { Routes, Route } from "react-router-dom";
import Nav from './components/nav';
import Home from './pages/home'
import About from "./pages/about";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
