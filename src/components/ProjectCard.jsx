// src/components/ProjectCard.jsx

import { useNavigate } from "react-router-dom";
import { FaGithub, FaInfoCircle } from "react-icons/fa";

const ProjectCard = ({ id, title, description, image, tech, code }) => {
  const navigate = useNavigate();

  return (
    <div className="group bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl overflow-hidden hover:-translate-y-2 hover:border-[var(--accent)]/40 hover:shadow-2xl hover:shadow-[var(--accent-glow)] transition-all duration-300 cursor-pointer w-full flex flex-col">

      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 sm:h-56 md:h-60 object-cover group-hover:scale-105 transition-transform duration-500"
        />

        <div className="absolute inset-0 bg-[var(--accent)]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button
            onClick={() => navigate(`/project/${id}`)}
            className="px-5 py-2 bg-white text-[var(--accent)] rounded-full font-semibold text-sm flex items-center gap-2 hover:scale-105 transition-transform duration-200 shadow-lg"
          >
            <FaInfoCircle /> View Details
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 flex flex-col flex-1">

        <h3 className="text-lg sm:text-xl font-semibold text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent)] transition-colors">
          {title}
        </h3>

        <p className="text-sm text-[var(--text-muted)] mb-4 line-clamp-3 flex-1">
          {description}
        </p>

        {/* Tech */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.slice(0, 3).map((item, index) => (
            <span
              key={index}
              className="bg-[var(--accent-soft)] border border-[var(--accent)]/30 text-[var(--accent)] px-2.5 py-0.5 rounded-full text-xs font-medium"
            >
              {item}
            </span>
          ))}

          {tech.length > 3 && (
            <span className="bg-[var(--bg-elevated)] text-[var(--text-muted)] px-2.5 py-0.5 rounded-full text-xs">
              +{tech.length - 3} more
            </span>
          )}
        </div>

        {/* Buttons */}
        <div className="flex gap-2 mt-auto">

          <a
            href={code}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 bg-[var(--bg-elevated)] border border-[var(--border-color)] rounded-lg text-sm font-medium hover:bg-[var(--bg-card)] transition text-[var(--text-primary)]"
          >
            <FaGithub /> Code
          </a>

          <button
            onClick={() => navigate(`/project/${id}`)}
            className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-[var(--accent)]/30 border border-[var(--accent)]/30 rounded-lg text-sm font-medium hover:bg-[var(--accent)] transition text-[var(--text-primary)]"
          >
            <FaInfoCircle /> More Details
          </button>

        </div>
      </div>
    </div>
  );
};

export default ProjectCard;