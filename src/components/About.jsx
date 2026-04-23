import React from "react";
import { motion } from "framer-motion";
import { aboutInfo, assets } from "../assets/assets";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      viewport={{ once: true }}
      id="about"
      className="py-16 md:py-20"
      style={{ background: "var(--bg-card)" }}
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
            <div className="relative w-[280px] h-[360px] sm:w-[360px] sm:h-[460px] lg:w-[450px] lg:h-[550px]">
              {/* Blob */}
              <div className="absolute inset-0 flex items-center justify-center scale-110 sm:scale-125">
                <svg viewBox="0 0 500 450" className="w-full h-full">
                  <path
                    d="M320,250 Q380,140 340,60 Q290,0 190,10 Q90,20 40,90 Q-10,160 20,250 Q50,340 100,410 Q150,480 250,490 Q350,500 390,420 Q430,340 320,250 Z"
                    fill="url(#blobGradient)"
                    className="drop-shadow-2xl"
                  />
                  <defs>
                    <linearGradient id="blobGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="20%" style={{ stopColor: "#072191ff", stopOpacity: 0.9 }} />
                      <stop offset="50%" style={{ stopColor: "#3b82f6", stopOpacity: 0.75 }} />
                      <stop offset="100%" style={{ stopColor: "#7cafecff", stopOpacity: 0.2 }} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.2 }}
                className="relative z-10 w-full h-full flex items-center justify-center"
              >
                <img
                  src={assets.aboutImg}
                  alt="profile"
                  className="w-auto h-full object-contain drop-shadow-2xl"
                  style={{
                    maskImage: "linear-gradient(to bottom, black 90%, transparent 100%)",
                    WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
                  }}
                />
              </motion.div>
            </div>

            {/* CV Button */}
            <div className="mt-8">
              <a
                href="/CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition"
                style={{
                  background: "var(--accent)",
                  color: "white",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "var(--accent-hover)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "var(--accent)")
                }
              >
                View CV
              </a>
            </div>
          </div>

          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="md:w-1/2"
          >
            <div className="rounded-2xl p-6 sm:p-8">
              <h3
                className="text-xl sm:text-2xl font-semibold mb-6"
                style={{ color: "var(--text-primary)" }}
              >
                My Journey
              </h3>

              <p
                className="text-sm sm:text-base mb-6"
                style={{ color: "var(--text-muted)" }}
              >
                My journey as a developer began with a deep curiosity for how technology shapes the world around us...
              </p>

              <p
                className="text-sm sm:text-base mb-10"
                style={{ color: "var(--text-muted)" }}
              >
                Today, I'm passionate about creating digital experiences that are not only functional but also visually engaging...
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {aboutInfo.map((data, index) => (
                  <div
                    key={index}
                    className="rounded-2xl p-6 hover:-translate-y-2 transition"
                    style={{
                      background: "var(--bg-elevated)",
                      border: "1px solid var(--border-color)",
                    }}
                  >
                    <div
                      className="flex justify-center text-4xl mb-4"
                      style={{ color: "var(--accent)" }}
                    >
                      <data.icon />
                    </div>
                    <h3
                      className="text-lg sm:text-xl font-semibold text-center mb-3"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {data.title}
                    </h3>
                    <p
                      className="text-sm text-center"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {data.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;