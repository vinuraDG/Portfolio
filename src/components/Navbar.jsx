import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-black/5 backdrop-blur-sm py-4 px-8 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-3xl font-bold text-white">
          Vinura<span className="text-blue-700">Deelaka</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {["home", "about", "skills", "projects", "achievements", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="relative text-white/80 transition duration-300 hover:text-blue-700 group capitalize"
            >
              <span>{item}</span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-700 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          {showMenu ? (
            <FaXmark
              onClick={() => setShowMenu(false)}
              className="text-2xl cursor-pointer text-white"
            />
          ) : (
            <FaBars
              onClick={() => setShowMenu(true)}
              className="text-2xl cursor-pointer text-white"
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {showMenu && (
          <motion.div
            key="mobileMenu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden mt-4 bg-black/5 h-screen rounded-lg p-6 flex flex-col space-y-6 shadow-lg text-center justify-center"
          >
            {["home", "about", "skills", "projects", "achievements", "contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className="relative text-white/80 transition duration-300 hover:text-blue-700 group capitalize"
                  onClick={() => setShowMenu(false)}
                >
                  {item}
                </a>
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;