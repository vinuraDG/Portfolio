import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";

const Hero = () => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const titles = [
    "Flutter Developer",
    "UI/UX Designer",
    "AI Enthusiast",
  ];

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let typingSpeed = 100; // milliseconds per letter
    let timeout;

    const currentTitle = titles[currentTitleIndex];

    if (!isDeleting && displayedText.length < currentTitle.length) {
      // Add next letter
      timeout = setTimeout(() => {
        setDisplayedText(currentTitle.slice(0, displayedText.length + 1));
      }, typingSpeed);
    } else if (isDeleting && displayedText.length > 0) {
      // Remove letter
      timeout = setTimeout(() => {
        setDisplayedText(currentTitle.slice(0, displayedText.length - 1));
      }, typingSpeed / 2);
    } else if (!isDeleting && displayedText.length === currentTitle.length) {
      // Pause at full title before deleting
      timeout = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && displayedText.length === 0) {
      // Move to next title
      setIsDeleting(false);
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, titles, currentTitleIndex]);

  // Statistics data
  const stats = [

    { number: "10+", label: "Project done" },
    { number: "5+", label: "Completed Certificates" }
  ];

  return (
    <><motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      viewport={{ once: true }}
      id="home"
      className="min-h-screen flex items-center pt-20 pb-16 relative overflow-hidden"
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between relative z-10">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
            Hi, I'm <span className="text-blue-700">Vinura Deelaka</span>
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold mb-6 text-white typewriter min-h-[3rem]">
            {displayedText}
            <span className="border-r-2 border-white animate-pulse ml-1" />
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            I create elegant mobile applications that blend performance with beautiful design.
            My focus is on delivering user-centered experiences through Flutter development,
            thoughtful UI/UX design, and AI-driven innovation. I love turning complex ideas into simple, functional, and impactful digital products.
          </p>
          {/* Statistics Section */}
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
                <h3 className="text-2xl md:text-3xl font-bold text-blue-700 mb-1">
                  {stat.number}
                </h3>
                <p className="text-gray-400 text-xs md:text-sm font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>


          <div className="flex space-x-4">

            <a
              className="px-6 py-3 bg-blue-700 rounded-lg font-medium text-white hover:bg-blue-800 transition duration-300"
            >
              View Work
            </a>

            <a
              href="#contact"
              className="px-6 py-3 border border-blue-700 rounded-lg font-medium text-white hover:bg-blue-700/20 transition duration-300"
            >
              Contact Me
            </a>
          </div>


        </div><div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 hex-container flex items-center justify-center">

            {/* Blue Hex Background */}
            <div className="absolute inset-0 hex-bg opacity-90"></div>

            {/* Image with bottom hex clip only */}
            <motion.img
              src={assets.projectImg6}
              alt="Profile"
              className="relative w-[90%] h-[89%] object-cover z-10 "
              style={{
                transform: 'rotate(-90deg) scale(1.46) translateY(-3%)',
                objectFit: 'cover',
                objectPosition: 'center top',
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 63%, 87% 73%, 50% 92.9%, 11% 72%, 0% 50%)'
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut"
              }} />
          </div>
        </div>
      </div>
    </motion.div>
    </>
  );
};

export default Hero;