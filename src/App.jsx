// src/App.jsx
import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import ParticleBackground from './components/ParticleBackground';
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectDetail from "./components/ProjectDetail"; // ← ADD THIS

const App = () => {
  const location = useLocation(); // ← ADD THIS
  const isDetailPage = location.pathname.startsWith("/project/"); // ← ADD THIS

  return (
    <div className="relative bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a] min-h-screen">
      <ParticleBackground />
      
      <div className="relative z-10">
        {!isDetailPage && <Navbar />} {/* ← HIDE on detail page */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetail />} /> {/* ← ADD THIS */}
        </Routes>

        {!isDetailPage && <Footer />} {/* ← HIDE on detail page */}
      </div>
    </div>
  );
};

export default App;