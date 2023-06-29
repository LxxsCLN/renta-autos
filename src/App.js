import React, { useState, useEffect, } from "react";
import { Routes, Route } from "react-router-dom";
import Nav from './components/nav';
import Home from './pages/home'

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
