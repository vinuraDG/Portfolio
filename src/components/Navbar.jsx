import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    return(
       <nav className='fixed w-full z-50 bg-black/5 backdrop-blur-sm py-4 px-8 shadow-lg'>
        <div className='container mx-auto flex justify-between items-center'>
            <div>
                <a onClick={()=>setShowMenu(!showMenu)} href="#" className="text-3xl font-bold text-white">
                    Vinura
                    <span className="text-blue-700">Deelaka</span>
                    
                </a>
            </div>
            <div className="hidden md:flex space-x-10">
                <a onClick={()=>setShowMenu(!showMenu)} href="#home" className="relative text-white/80 transtition duration-300 hover:text-blue-700 group">
                    <span>Home</span>
                    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-700 transition-all duration-300 group-hover:w-full"></span>

                </a>
            </div>
            <div className="hidden md:flex space-x-10">
                <a onClick={()=>setShowMenu(!showMenu)} href="#about" className="relative text-white/80 transtition duration-300 hover:text-blue-700 group">
                    <span>About</span>
                    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-700 transition-all duration-300 group-hover:w-full"></span>

                </a>
            </div>
            <div className="hidden md:flex space-x-10">
                <a onClick={()=>setShowMenu(!showMenu)} href="#skills" className="relative text-white/80 transtition duration-300 hover:text-blue-700 group">
                    <span>Skills</span>
                    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-700 transition-all duration-300 group-hover:w-full"></span>

                </a>
            </div>
            <div className="hidden md:flex space-x-10">
                <a onClick={()=>setShowMenu(!showMenu)} href="#projects" className="relative text-white/80 transtition duration-300 hover:text-blue-700 group">
                    <span>Projects</span>
                    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-700 transition-all duration-300 group-hover:w-full"></span>

                </a>
            </div>
            <div className="hidden md:flex space-x-10">
                <a onClick={()=>setShowMenu(!showMenu)} href="#experience" className="relative text-white/80 transtition duration-300 hover:text-blue-700 group">
                    <span>Experience</span>
                    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-700 transition-all duration-300 group-hover:w-full"></span>

                </a>
            </div>
            <div className="hidden md:flex space-x-10">
                <a onClick={()=>setShowMenu(!showMenu)} href="#contact" className="relative text-white/80 transtition duration-300 hover:text-blue-700 group">
                    <span>Contact</span>
                    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-700 transition-all duration-300 group-hover:w-full"></span>

                </a>
            </div>
            <div className="md:hidden">
                {
                  showMenu ?
                  <FaXmark onClick={()=>setShowMenu(!showMenu)} className="text-2xl cursor-pointer"/>:
                  <FaBars onClick={()=>setShowMenu(!showMenu)} className="text-2xl cursor-pointer"/>
                }
                
                
            </div>
        </div>
       
{
  showMenu && (
    <AnimatePresence>
      <motion.div
        key="mobileMenu"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="md:hidden mt-4 bg-black/5 h-screen rounded-lg p-6 flex flex-col space-y-6 shadow-lg text-center justify-center"
      >
        {["home", "about", "skills", "projects", "experience", "contact"].map((item) => (
          <a
            key={item}
            href={`#${item}`}
            className="relative text-white/80 transition duration-300 hover:text-blue-700 group"
          >
            <span className="capitalize">{item}</span>
            
          </a>
        ))}
      </motion.div>
    </AnimatePresence>
  )
}

       </nav>
    )
}

export default Navbar;