import React from "react";
import { motion } from "framer-motion";
import { skills } from "../assets/assets";

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id="skills"
      className="py-20"
      style={{ background: "var(--bg-card)" }}
    >
      <div className="container mx-auto px-6">
        <h2
          className="text-3xl font-bold text-center mb-4"
          style={{ color: "var(--text-primary)" }}
        >
          My <span style={{ color: "var(--accent)" }}>Skills</span>
        </h2>
        <p
          className="text-center max-w-2xl mx-auto mb-16"
          style={{ color: "var(--text-muted)" }}
        >
          Technologies I work with to bring ideas to life
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="rounded-2xl p-6 hover:-translate-y-2 transition duration-300 cursor-pointer"
              style={{
                background: "var(--bg-surface)",
                border: "1px solid var(--border-color)",
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = "var(--accent)"}
              onMouseLeave={e => e.currentTarget.style.borderColor = "var(--border-color)"}
            >
              {/* Icon + Title */}
              <div className="flex flex-col items-center text-center mb-4">
                <skill.icon
                  className="w-12 h-12 mb-3"
                  style={{ color: "var(--accent)" }}
                />
                <h3
                  className="text-xl font-semibold mb-2"
                  style={{ color: "var(--text-primary)" }}
                >
                  {skill.title}
                </h3>
              </div>

              {/* Description */}
              <p
                className="mb-4 text-center text-sm"
                style={{ color: "var(--text-muted)" }}
              >
                {skill.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap justify-center gap-2">
                {skill.tags.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-sm"
                    style={{
                      background: "var(--accent-soft)",
                      color: "var(--accent)",
                      border: "1px solid var(--accent-glow)",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;