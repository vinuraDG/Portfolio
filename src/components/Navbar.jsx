import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav
      className="fixed w-full z-50 backdrop-blur-sm py-4 px-8 shadow-lg"
      style={{ background: "var(--bg-surface)", borderBottom: "1px solid var(--border-color)" }}
    >
      <div className="container mx-auto flex justify-between items-center">

        {/* Logo */}
        <a href="#" className="text-3xl font-bold" style={{ color: "var(--text-primary)" }}>
          Vinura<span style={{ color: "var(--accent)" }}>Deelaka</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {["home", "about", "skills", "projects", "achievements", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="relative transition duration-300 capitalize group"
              style={{ color: "var(--text-muted)" }}
              onMouseEnter={e => e.currentTarget.style.color = "var(--accent)"}
              onMouseLeave={e => e.currentTarget.style.color = "var(--text-muted)"}
            >
              <span>{item}</span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 transition-all duration-300 group-hover:w-full" style={{ background: "var(--accent)" }}></span>
            </a>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button + Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          {showMenu ? (
            <FaXmark
              onClick={() => setShowMenu(false)}
              className="text-2xl cursor-pointer"
              style={{ color: "var(--text-primary)" }}
            />
          ) : (
            <FaBars
              onClick={() => setShowMenu(true)}
              className="text-2xl cursor-pointer"
              style={{ color: "var(--text-primary)" }}
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
            className="md:hidden mt-4 h-screen rounded-lg p-6 flex flex-col space-y-6 shadow-lg text-center justify-center"
            style={{ background: "var(--bg-surface)" }}
          >
            {["home", "about", "skills", "projects", "achievements", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="transition duration-300 capitalize"
                style={{ color: "var(--text-muted)" }}
                onMouseEnter={e => e.currentTarget.style.color = "var(--accent)"}
                onMouseLeave={e => e.currentTarget.style.color = "var(--text-muted)"}
                onClick={() => setShowMenu(false)}
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;