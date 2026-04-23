// src/components/ProjectCard.jsx
import { useNavigate } from "react-router-dom";
import { FaGithub, FaInfoCircle } from "react-icons/fa";

const ProjectCard = ({ id, title, description, image, tech, code }) => {
  const navigate = useNavigate();

  return (
    <div className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:-translate-y-2 hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-900/30 transition-all duration-300 cursor-pointer w-full flex flex-col">
      
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 sm:h-56 md:h-60 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-blue-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button
            onClick={() => navigate(`/project/${id}`)}
            className="px-5 py-2 bg-white text-blue-800 rounded-full font-semibold text-sm flex items-center gap-2 hover:scale-105 transition-transform duration-200 shadow-lg"
          >
            <FaInfoCircle /> View Details
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 flex flex-col flex-1">
        <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-200">
          {title}
        </h3>
        <p className="text-sm text-gray-400 mb-4 line-clamp-3 flex-1">{description}</p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {tech.slice(0, 3).map((item, index) => (
            <span
              key={index}
              className="bg-blue-700/20 border border-blue-700/30 text-blue-300 px-2.5 py-0.5 rounded-full text-xs font-medium"
            >
              {item}
            </span>
          ))}
          {tech.length > 3 && (
            <span className="bg-white/10 text-gray-400 px-2.5 py-0.5 rounded-full text-xs font-medium">
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
            className="flex items-center gap-2 px-3 py-2 bg-white/10 border border-white/10 rounded-lg text-sm font-medium hover:bg-white/20 transition duration-200 text-white"
          >
            <FaGithub /> Code
          </a>
          <button
            onClick={() => navigate(`/project/${id}`)}
            className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-blue-700/30 border border-blue-600/30 rounded-lg text-sm font-medium hover:bg-blue-600 transition duration-200 text-white"
          >
            <FaInfoCircle /> More Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;