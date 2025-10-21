import React from "react";
import { motion } from "framer-motion";
import profileImg from "../assets/profile.avif";
import { assets } from "../assets/assets";

const Hero = () => {
    return (
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeInOut" }}
  viewport={{ once: true }}
  id="home"
  className="min-h-screen flex items-center pt-20 pb-16 bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a]"
>
  <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
    {/* Text Section */}
    <div className="md:w-1/2 mb-10 md:mb-0">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
        Hi, I'm <span className="text-blue-700">Vinura Deelaka</span>
      </h1>
      <h2 className="text-2xl md:text-4xl font-semibold mb-6 text-white typewriter">
        Full Stack Developer
      </h2>
      <p className="text-lg text-gray-300 mb-8">
        I create stunning web experiences with modern technologies and innovative design.
      </p>
      <div className="flex space-x-4">
        <a
          href="#projects"
          className="px-6 py-3 bg-blue-700 rounded-lg font-medium text-white hover:bg-blue-700 transition duration-300"
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
    </div>

    {/* Image Section */}
    <div className="md:w-1/2 flex justify-center">
      <div className="relative w-64 h-64 md:w-80 md:h-80">
       <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-700 to-white-500 animate-pulse opacity-70"></div>

        <motion.img
          src={assets.profileImg}
          alt="Profile"
          className="relative rounded-full w-64 h-64 md:w-80 md:h-80 object-cover z-10 animate-float"
          
          animate={{ y:[0, -20, 0] }}
          transition={{ 
            duration:4,
            repeat:Infinity,
            repeatType:"loop",
            ease:"easeInOut"
           }}
        />
      </div>
    </div>
  </div>
</motion.div>

    )
}

export default Hero; 