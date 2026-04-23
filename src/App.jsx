// src/App.jsx
import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import ParticleBackground from "./components/ParticleBackground";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectDetail from "./components/ProjectDetail";

const App = () => {
  const location = useLocation();
  const isDetailPage = location.pathname.startsWith("/project/");

  // Apply saved theme before first paint — prevents flash
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme = saved ?? (prefersDark ? "dark" : "light");
    document.documentElement.setAttribute("data-theme", theme);
  }, []);

  return (
    <div className="relative min-h-screen" style={{ background: "var(--bg-primary)" }}>
      <ParticleBackground />

      <div className="relative z-10">
        {!isDetailPage && <Navbar />}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>

        {!isDetailPage && <Footer />}
      </div>
    </div>
  );
};

export default App;