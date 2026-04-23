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
    { number: "10+", label: "Project done" },
    { number: "5+", label: "Completed Certificates" },
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
          <div className="relative w-64 h-64 md:w-80 md:h-80 hex-container flex items-center justify-center">
            <div className="absolute inset-0 hex-bg opacity-90"></div>
            <motion.img
              src={assets.projectImg6}
              alt="Profile"
              className="relative w-[90%] h-[89%] object-cover z-10"
              style={{
                transform: "rotate(-90deg) scale(1.46) translateY(-3%)",
                objectFit: "cover",
                objectPosition: "center top",
                clipPath: "polygon(0% 0%, 100% 0%, 100% 62%, 87% 73%, 50% 92.9%, 12% 72%, 0% 50%)",
              }}
              transition={{ duration: 4, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;