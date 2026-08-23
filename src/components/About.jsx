import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaDownload, FaEye } from "react-icons/fa";
import { aboutInfo, assets } from "../assets/assets";

const About = () => {
  return (
    <div
      id="about"
      className="py-16 md:py-20"


    >
      <div className="container mx-auto px-4 sm:px-6">
        <h2
          className="text-2xl sm:text-3xl font-bold text-center mb-4"
          style={{ color: "var(--text-primary)" }}
        >
          About <span style={{ color: "var(--accent)" }}>Me</span>
        </h2>

        <p
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 text-sm sm:text-base"
          style={{ color: "var(--text-muted)" }}
        >
          Get to know about my background and passion
        </p>

        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image Section */}
          <div className="md:w-1/2 flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative"
              style={{ width: 300, height: 400 }}
            >
              {/* Outer glow backdrop */}
              <div className="absolute inset-0 rounded-3xl pointer-events-none"
                style={{
                  boxShadow: "0 0 60px var(--accent-glow), 0 0 120px rgba(20,71,230,0.08)",
                  borderRadius: 24,
                }}
              />

              {/* Main card */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden"
                style={{
                  border: "1.5px solid var(--accent)",
                  background: "linear-gradient(160deg, rgba(20,71,230,0.18) 0%, rgba(20,71,230,0.04) 60%, transparent 100%)",
                  backdropFilter: "blur(2px)",
                }}
              >
                {/* Image */}
                <img
                  src={assets.aboutImg}
                  alt="Vinura Deelaka"
                  className="w-full h-full object-cover object-top"
                  style={{
                    maskImage: "linear-gradient(to bottom, black 75%, transparent 100%)",
                    WebkitMaskImage: "linear-gradient(to bottom, black 75%, transparent 100%)",
                  }}
                />

                {/* Bottom accent bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1"
                  style={{ background: "linear-gradient(90deg, transparent, var(--accent), transparent)" }}
                />
              </div>

              {/* Tech corner brackets */}
              {[
                { top: -2, left: -2, rotate: 0 },
                { top: -2, right: -2, rotate: 90 },
                { bottom: -2, right: -2, rotate: 180 },
                { bottom: -2, left: -2, rotate: 270 },
              ].map((pos, i) => (
                <svg key={i} width="22" height="22" viewBox="0 0 22 22"
                  className="absolute"
                  style={{ ...pos, transform: `rotate(${pos.rotate}deg)` }}
                >
                  <path d="M2 20 L2 2 L20 2" fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              ))}

              {/* Floating experience badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-12 top-12 flex flex-col items-center gap-1 z-20"
              >
                <div className="rounded-2xl px-4 py-3 text-center shadow-xl"
                  style={{
                    background: "var(--bg-surface)",
                    border: "1.5px solid var(--accent)",
                    boxShadow: "0 0 18px var(--accent-glow)",
                    minWidth: 80,
                  }}
                >
                  <p className="text-xl font-bold" style={{ color: "var(--accent)" }}>3+</p>
                  <p className="text-xs font-medium" style={{ color: "var(--text-muted)" }}>Years Exp.</p>
                </div>
              </motion.div>

              {/* Floating projects badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                className="absolute -left-12 bottom-20 z-20"
              >
                <div className="rounded-2xl px-4 py-3 text-center shadow-xl"
                  style={{
                    background: "var(--bg-surface)",
                    border: "1.5px solid var(--accent)",
                    boxShadow: "0 0 18px var(--accent-glow)",
                    minWidth: 80,
                  }}
                >
                  <p className="text-xl font-bold" style={{ color: "var(--accent)" }}>20+</p>
                  <p className="text-xs font-medium" style={{ color: "var(--text-muted)" }}>Projects</p>
                </div>
              </motion.div>

              {/* Decorative dots */}
              <div className="absolute -bottom-4 -right-4 grid grid-cols-3 gap-1.5 pointer-events-none opacity-50">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--accent)" }} />
                ))}
              </div>
            </motion.div>

            {/* CV Buttons */}
            <div className="flex gap-3 mt-14">
              <a
                href="/CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300"
                style={{ background: "var(--accent)", color: "white", boxShadow: "0 4px 20px var(--accent-glow)" }}
                onMouseEnter={e => e.currentTarget.style.background = "var(--accent-hover)"}
                onMouseLeave={e => e.currentTarget.style.background = "var(--accent)"}
              >
                <FaEye size={14} /> View CV
              </a>
              <a
                href="/CV.pdf"
                download
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300"
                style={{ border: "1.5px solid var(--accent)", color: "var(--accent)", background: "transparent" }}
                onMouseEnter={e => e.currentTarget.style.background = "var(--accent-soft)"}
                onMouseLeave={e => e.currentTarget.style.background = "transparent"}
              >
                <FaDownload size={13} /> Download
              </a>
            </div>
          </div>

          {/* Text Section */}
          <div className="md:w-1/2">
            <div className="rounded-2xl p-6 sm:p-8">
              <h3
                className="text-xl sm:text-2xl font-semibold mb-6"
                style={{ color: "var(--text-primary)" }}
              >
                My Journey
              </h3>

              <p className="text-sm sm:text-base mb-6" style={{ color: "var(--text-muted)" }}>
                My journey as a developer began with a deep curiosity for how technology shapes the world around us...
              </p>

              <p className="text-sm sm:text-base mb-10" style={{ color: "var(--text-muted)" }}>
                Today, I'm passionate about creating digital experiences that are not only functional but also visually engaging...
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {aboutInfo.map((data, index) => (
                  <div
                    key={index}
                    className="rounded-2xl p-6 hover:-translate-y-2 transition"
                    style={{
                     background: "var(--bg-surface)",
                      border: "1px solid var(--border-color)",
                    }}
                  >
                    <div className="flex justify-center text-4xl mb-4" style={{ color: "var(--accent)" }}>
                      <data.icon />
                    </div>
                    <h3
                      className="text-lg sm:text-xl font-semibold text-center mb-3"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {data.title}
                    </h3>
                    <p className="text-sm text-center" style={{ color: "var(--text-muted)" }}>
                      {data.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;