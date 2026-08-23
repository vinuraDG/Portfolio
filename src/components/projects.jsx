// src/components/projects.jsx

import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projects } from "../assets/projects";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 overflow-hidden"
    >
      <div className="w-full px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-center mb-4" style={{ color: "var(--text-primary)" }}>
          My <span style={{ color: "var(--accent)" }}>Projects</span>
        </h2>
        <p className="text-center max-w-2xl mx-auto mb-16" style={{ color: "var(--text-muted)" }}>
          Selection of my recent work showcasing my skills and expertise
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 w-full min-w-0 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true, amount: 0 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;