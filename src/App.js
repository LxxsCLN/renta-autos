import React, { useState, useEffect, } from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import Nav from './components/nav';

function App() {
  return (
    <HashRouter>
      <Nav />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
      </Routes>
    </HashRouter>
  );
}

export default App;
