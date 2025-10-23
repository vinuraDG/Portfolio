import React from "react";

const ProjectCard = ({ title, description, image, tech, demo, code }) => {
  return (
    <div className="bg-black/20 rounded-2xl overflow-hidden hover:-translate-y-2 transition duration-300 cursor-pointer">
      <img src={image} alt={title} className="w-full h-60 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-2">
          {tech.map((item, index) => (
            <span
              key={index}
              className="bg-blue-700/30 text-blue-300 px-3 py-1 rounded-full text-sm"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-2 mt-6">
         

          <a
            href={code}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center px-4 py-2 bg-blue-700/30 rounded-lg font-medium hover:bg-blue-700 transition duration-300 text-white"
          >
            Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
