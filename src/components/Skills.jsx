import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import {motion} from 'framer-motion'
import { skills } from "../assets/assets";



const Skills = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            id='skills'
            className="py-20 bg-black/20"
        >
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-4 text-white">My
                    <span className="text-blue-700">Skills</span>
                </h2>
                <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">Technologies I work with to bring ideas to life</p>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {
  skills.map((skill, index) => (
    <div
      key={index}
      className="bg-black/20 rounded-2xl p-6 hover:-translate-y-2 transition duration-300 cursor-pointer"
    >
      {/* Icon + Title (Top Section) */}
      <div className="flex flex-col items-center text-center mb-4">
        <skill.icon className="w-12 h-12 text-blue-700 mb-3" />
        <h3 className="text-xl font-semibold text-white mb-2">
          {skill.title}
        </h3>
      </div>

      {/* Description */}
      <p className="text-gray-400 mb-4 text-center">
        {skill.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap justify-center gap-2">
        {skill.tags.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-black rounded-full text-sm text-gray-300"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  ))
}

                </div> 
            </div>

        </motion.div>

    )
}

export default Skills;