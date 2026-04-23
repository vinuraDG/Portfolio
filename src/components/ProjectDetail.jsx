// src/components/ProjectDetail.jsx
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "../assets/projects";
import { FaGithub, FaArrowLeft, FaCheckCircle, FaTag, FaCalendarAlt, FaLayerGroup } from "react-icons/fa";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-white bg-[#0a0a1a]">
        <p className="text-2xl mb-4">Project not found.</p>
        <button
          onClick={() => navigate("/")}
          className="px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-500 transition"
        >
          Go Back Home
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a1a] text-white">
      
      {/* Hero Image Banner */}
      <div className="relative w-full h-64 sm:h-80 md:h-96 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-[#0a0a1a]" />

        {/* Back button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-5 left-5 flex items-center gap-2 px-4 py-2 bg-black/50 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium hover:bg-black/70 transition duration-200"
        >
          <FaArrowLeft /> Back
        </button>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-5 sm:px-8 pb-20 -mt-16 relative z-10">
        
        {/* Title & Meta */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
            {project.title}
          </h1>

          {/* Meta chips */}
          <div className="flex flex-wrap gap-3 mb-8">
            <span className="flex items-center gap-1.5 text-sm px-3 py-1 bg-blue-700/30 border border-blue-600/30 text-blue-300 rounded-full">
              <FaLayerGroup className="text-xs" /> {project.category}
            </span>
            <span className="flex items-center gap-1.5 text-sm px-3 py-1 bg-green-700/20 border border-green-600/30 text-green-400 rounded-full">
              <FaCheckCircle className="text-xs" /> {project.status}
            </span>
            <span className="flex items-center gap-1.5 text-sm px-3 py-1 bg-white/10 border border-white/10 text-gray-400 rounded-full">
              <FaCalendarAlt className="text-xs" /> {project.year}
            </span>
          </div>

          {/* Description */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-7 mb-6">
            <h2 className="text-lg font-semibold text-blue-400 mb-3">About This Project</h2>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              {project.longDescription}
            </p>
          </div>

          {/* Features */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-7 mb-6">
            <h2 className="text-lg font-semibold text-blue-400 mb-4">Key Features</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.4 }}
                  className="flex items-start gap-3 text-sm text-gray-300"
                >
                  <FaCheckCircle className="text-blue-500 mt-0.5 flex-shrink-0" />
                  {feature}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-7 mb-8">
            <h2 className="text-lg font-semibold text-blue-400 mb-4">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((item, index) => (
                <span
                  key={index}
                  className="flex items-center gap-1.5 bg-blue-700/20 border border-blue-700/40 text-blue-300 px-3 py-1.5 rounded-full text-sm font-medium"
                >
                  <FaTag className="text-xs" /> {item}
                </span>
              ))}
            </div>

            {/* Icons row */}
            <div className="flex gap-4 mt-5">
              {project.icons.map((Icon, index) => (
                <div key={index} className="p-2.5 bg-white/10 rounded-xl border border-white/10">
                  <Icon className="text-blue-400 text-xl" />
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={project.code}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-3 py-3 bg-blue-700 hover:bg-blue-600 rounded-xl font-semibold text-white transition duration-300 shadow-lg shadow-blue-900/40"
            >
              <FaGithub className="text-lg" /> View on GitHub
            </a>
            <button
              onClick={() => navigate(-1)}
              className="flex-1 flex items-center justify-center gap-3 py-3 bg-white/10 border border-white/10 hover:bg-white/20 rounded-xl font-semibold text-white transition duration-300"
            >
              <FaArrowLeft /> Back to Projects
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail;