import React from "react";
import { Route, Routes } from "react-router-dom";
import ParticleBackground from './components/ParticleBackground'
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Footer from "./components/Footer";


const App = () => {
  return(
    <div className="relative bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a] min-h-screen">
      {/* Particle background - stays behind everything */}
      <ParticleBackground />
      
      {/* Main content with relative positioning */}
      <div className="relative z-10">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
        <Footer/>
      </div>
    </div>
  )
}

export default App