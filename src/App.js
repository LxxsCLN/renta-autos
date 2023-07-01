import React, { useState, useEffect, } from "react";
import { Routes, Route } from "react-router-dom";
import Nav from './components/nav';
import Home from './pages/home'
import About from "./pages/about";
import TestimonialsPage from "./pages/testimonialspage";
import Contact from "./pages/contact";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
