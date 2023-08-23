import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Blue from './components/Blue';
import Red from './components/Red';
import Green from './components/Green';
import Home from './components/Home';
import Navbar from './components/Navbar';
import './App.css'

function App() {

  return (
    <>
      <div>
        <div id="container">
          <Navbar />
          <div id="main-section">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blue" element={<Blue />} />
              <Route path="/red" element={<Red />} />
              <Route path="/green" element={<Green />} />
            </Routes>
          </div>
        </div>
        <div id='footer-container'>
          <div id="footer">
            <Navbar />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
