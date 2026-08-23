// src/components/ProjectDetail.jsx

import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "../assets/projects";
import {
  FaGithub,
  FaArrowLeft,
  FaCheckCircle,
  FaTag,
  FaCalendarAlt,
  FaLayerGroup
} from "react-icons/fa";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--bg-primary)] text-[var(--text-primary)]">
        <p className="text-2xl mb-4">Project not found.</p>
        <button
          onClick={() => navigate("/")}
          className="px-6 py-2 bg-[var(--accent)] rounded-lg text-white hover:opacity-90 transition"
        >
          Go Back Home
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">

      {/* Hero */}
      <div className="relative w-full h-64 sm:h-80 md:h-96 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-[var(--bg-primary)]" />

        <button
          onClick={() => navigate(-1)}
          className="absolute top-5 left-5 flex items-center gap-2 px-4 py-2 bg-black/40 backdrop-blur-sm border border-white/10 rounded-full text-sm hover:bg-black/60 transition"
        >
          <FaArrowLeft /> Back
        </button>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-5 sm:px-8 pb-20 -mt-16 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            {project.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap gap-3 mb-8">

            <span className="flex items-center gap-1.5 text-sm px-3 py-1 bg-[var(--accent-soft)] border border-[var(--accent)]/30 text-[var(--accent)] rounded-full">
              <FaLayerGroup /> {project.category}
            </span>

            <span className="flex items-center gap-1.5 text-sm px-3 py-1 bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-muted)] rounded-full">
              <FaCalendarAlt /> {project.year}
            </span>

          </div>

          {/* Description */}
          <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-6 mb-6">
            <h2 className="text-lg font-semibold text-[var(--accent)] mb-3">
              About This Project
            </h2>
            <p className="text-[var(--text-muted)] leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          {/* Features */}
          <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-6 mb-6">
            <h2 className="text-lg font-semibold text-[var(--accent)] mb-4">
              Key Features
            </h2>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.features.map((f, i) => (
                <li key={i} className="flex items-start gap-2 text-[var(--text-muted)]">
                  <FaCheckCircle className="text-[var(--accent)] mt-1" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Tech */}
          <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-6 mb-8">

            <h2 className="text-lg font-semibold text-[var(--accent)] mb-4">
              Tech Stack
            </h2>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="flex items-center gap-1 px-3 py-1 bg-[var(--accent-soft)] border border-[var(--accent)]/30 text-[var(--accent)] rounded-full text-sm"
                >
                  <FaTag /> {t}
                </span>
              ))}
            </div>

          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">

            <a
              href={project.code}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3 bg-[var(--accent)] text-white rounded-xl font-semibold hover:opacity-90 transition"
              style={{
                  background: "var(--accent)",
                  color: "white",
                }}
            >
              <FaGithub /> View Code
            </a>

            <button
              onClick={() => navigate(-1)}
              className="flex-1 py-3 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl hover:bg-[var(--bg-elevated)] transition"
            >
              Back
            </button>

          </div>

        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail;