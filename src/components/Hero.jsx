import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";

const Hero = () => {
  const titles = ["Flutter Developer", "UI/UX Designer", "AI Enthusiast"];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let typingSpeed = 100;
    let timeout;
    const currentTitle = titles[currentTitleIndex];

    if (!isDeleting && displayedText.length < currentTitle.length) {
      timeout = setTimeout(() => {
        setDisplayedText(currentTitle.slice(0, displayedText.length + 1));
      }, typingSpeed);
    } else if (isDeleting && displayedText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayedText(currentTitle.slice(0, displayedText.length - 1));
      }, typingSpeed / 2);
    } else if (!isDeleting && displayedText.length === currentTitle.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && displayedText.length === 0) {
      setIsDeleting(false);
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, titles, currentTitleIndex]);

  const stats = [
    { number: "20+", label: "Project done" },
    { number: "10+", label: "Completed Certificates" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      viewport={{ once: true }}
      id="home"
      className="min-h-screen flex items-center pt-20 pb-16 relative overflow-hidden"
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between relative z-10">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
            Hi, I'm <span style={{ color: "var(--accent)" }}>Vinura Deelaka</span>
          </h1>

          <h2
            className="text-2xl md:text-4xl font-semibold mb-6 min-h-[3rem]"
            style={{ color: "var(--text-primary)" }}
          >
            {displayedText}
            <span
              className="animate-pulse ml-1 inline-block w-0.5 h-8"
              style={{ background: "var(--accent)" }}
            />
          </h2>

          <p className="text-lg mb-8" style={{ color: "var(--text-muted)" }}>
            I create elegant mobile applications that blend performance with beautiful design.
            My focus is on delivering user-centered experiences through Flutter development,
            thoughtful UI/UX design, and AI-driven innovation. I love turning complex ideas
            into simple, functional, and impactful digital products.
          </p>

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-9 mb-10">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h3 className="text-2xl md:text-3xl font-bold mb-1" style={{ color: "var(--accent)" }}>
                  {stat.number}
                </h3>
                <p className="text-xs md:text-sm font-medium" style={{ color: "var(--text-muted)" }}>
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="flex space-x-4">
            <a
             href="#projects"
              className="px-6 py-3 rounded-lg font-medium text-white transition duration-300 cursor-pointer"
            style={{
                  background: "var(--accent)",
                  color: "white",
                }}
              onMouseEnter={e => e.currentTarget.style.background = "var(--accent-hover)"}
              onMouseLeave={e => e.currentTarget.style.background = "var(--accent)"}
            >
              View Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg font-medium transition duration-300"
              style={{
                border: "1px solid var(--accent)",
                color: "var(--accent)",
                background: "transparent",
              }}
              onMouseEnter={e => e.currentTarget.style.background = "var(--accent-soft)"}
              onMouseLeave={e => e.currentTarget.style.background = "transparent"}
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <div className="flex items-center gap-5">

            {/* Left badges */}
            <div className="flex flex-col gap-5">
              {[{ label: "Flutter", emoji: "📱", delay: 0 }, { label: "Python", emoji: "🐍", delay: 0.6 }].map(({ label, emoji, delay }) => (
                <motion.div
                  key={label}
                  animate={{ x: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay }}
                  className="flex flex-col items-center gap-1"
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-xl shadow-xl"
                    style={{ background: "var(--bg-surface)", border: "2px solid var(--accent)", boxShadow: "0 0 14px var(--accent-glow)" }}>
                    {emoji}
                  </div>
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full whitespace-nowrap"
                    style={{ background: "var(--accent-soft)", color: "var(--accent)", border: "1px solid var(--accent-glow)" }}>
                    {label}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Photo with rings */}
            <div className="relative flex items-center justify-center flex-shrink-0" style={{ width: 260, height: 260 }}>

              {/* Pulsing outer ring */}
              <motion.div
                animate={{ scale: [1, 1.07, 1], opacity: [0.4, 0.12, 0.4] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute rounded-full pointer-events-none"
                style={{ inset: -14, borderRadius: "50%", border: "1.5px solid var(--accent)", boxShadow: "0 0 30px var(--accent-glow)" }}
              />

              {/* Spinning arc ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
                className="absolute pointer-events-none"
                style={{ inset: -4, borderRadius: "50%", background: "conic-gradient(from 0deg, var(--accent) 0%, transparent 50%, var(--accent) 100%)", padding: 2, borderRadius: "50%" }}
              >
                <div style={{ width: "100%", height: "100%", borderRadius: "50%", background: "var(--bg-primary)" }} />
              </motion.div>

              {/* Dashed ring */}
              <div className="absolute rounded-full pointer-events-none"
                style={{ inset: 4, borderRadius: "50%", border: "1px dashed var(--accent-glow)" }} />

              {/* Photo */}
              <div className="relative overflow-hidden rounded-full z-10"
                style={{ width: 240, height: 240, border: "3px solid var(--accent)", boxShadow: "0 0 40px var(--accent-glow)" }}>
                <img src={assets.projectImg6} alt="Vinura Deelaka"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }} />
              </div>
            </div>

            {/* Right badges */}
            <div className="flex flex-col gap-5">
              {[{ label: "React", emoji: "⚛️", delay: 0.3 }, { label: "AI", emoji: "🤖", delay: 0.9 }].map(({ label, emoji, delay }) => (
                <motion.div
                  key={label}
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay }}
                  className="flex flex-col items-center gap-1"
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-xl shadow-xl"
                    style={{ background: "var(--bg-surface)", border: "2px solid var(--accent)", boxShadow: "0 0 14px var(--accent-glow)" }}>
                    {emoji}
                  </div>
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full whitespace-nowrap"
                    style={{ background: "var(--accent-soft)", color: "var(--accent)", border: "1px solid var(--accent-glow)" }}>
                    {label}
                  </span>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;