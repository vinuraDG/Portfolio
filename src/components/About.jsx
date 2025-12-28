import React from "react"
import { motion } from 'framer-motion'
import { aboutInfo, assets } from "../assets/assets";

const Particle = ({ delay, duration, startX, startY, size, color, drift }) => {
  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        opacity: 0.6,
      }}
      initial={{ x: startX, y: startY, opacity: 0 }}
      animate={{
        x: [startX, startX + drift],
        y: [startY, -100],
        opacity: [0, 0.8, 0],
      }}
      transition={{
        duration: duration,
        delay: delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
};

const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            viewport={{ once: true }}
            id='about'
            className='py-20 bg-black/5'
        >
            <div className="container mx-0 px-6">
                <h2 className="text-3xl font-bold text-center mb-4 text-white">
                    About <span className="text-blue-700">Me</span>
                </h2>
                <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
                    Get to know about my background and passion
                </p>

                {/* Image and Text Side by Side */}
                <div className="flex flex-col md:flex-row items-center gap-10">
                    {/* Image Section */}
                    <div className="md:w-1/2 flex flex-col items-center">
                        <div className="relative w-[450px] h-[550px]">
                            {/* Decorative blob background - LARGER */}
                            <div className="absolute inset-0 flex items-center justify-center scale-125">
                                <svg viewBox="0 0 500 450" className="w-full h-full">
                                    <path
                                        d="M320,250 Q380,140 340,60 Q290,0 190,10 Q90,20 40,90 Q-10,160 20,250 Q50,340 100,410 Q150,480 250,490 Q350,500 390,420 Q430,340 320,250 Z"
                                        fill="url(#blobGradient)"
                                        className="drop-shadow-2xl"
                                    />
                                    <defs>
                                        <linearGradient id="blobGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="20%" style={{ stopColor: '#072191ff', stopOpacity: 0.85 }} />
                                            <stop offset="50%" style={{ stopColor: '#3b82f6', stopOpacity: 0.75 }} />
                                            <stop offset="100%" style={{ stopColor: '#7cafecff', stopOpacity: 0.65 }} />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>

                            {/* Main image */}
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.9, ease: "easeOut" }}
                                viewport={{ once: false, amount: 0.2 }}
                                className="relative z-10 w-full h-full flex items-center justify-center"
                            >
                                <img
                                    className="w-auto h-full object-contain drop-shadow-2xl"
                                    src={assets.aboutImg}
                                    alt="profile"
                                    style={{
                                        maskImage: 'linear-gradient(to bottom, black 90%, transparent 100%)',
                                        WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'
                                    }}
                                />
                            </motion.div>

                            {/* Floating stat cards */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.7, delay: 0.3 }}
                                viewport={{ once: false }}
                                className="absolute top-16 right-1 bg-white px-9 py-3 rounded-2xl shadow-2xl border-2 border-gray-100"
                            >
                                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">2+</div>
                                <div className="text-sm text-gray-700 font-medium mt-1 whitespace-nowrap">Years of Experience</div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.7, delay: 0.5 }}
                                viewport={{ once: false }}
                                className="absolute top-2/4 -left-32 bg-white px-9 py-3 rounded-2xl shadow-2xl border-2 border-gray-100"
                            >
                                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">10+</div>
                                <div className="text-sm text-gray-700 font-medium mt-1 whitespace-nowrap">Projects Completed</div>
                            </motion.div>


                        </div>

                        {/* Download Button under the image */}
                        <div className="mt-15 flex justify-center">

                            <a
                                href="/CV.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out"
                            >
                                <span className="group-hover:underline">View CV</span>
                            </a>
                        </div>
                    </div>


                    {/* Text Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                        viewport={{ once: false, amount: 0.2 }}
                        className="md:w-1/2"
                    >
                        <div className="rounded-2xl p-8">
                            <h3 className="text-2xl font-semibold mb-6 text-white">My Journey</h3>
                            <p className="text-gray-300 mb-6">
                                My journey as a developer began with a deep curiosity for how technology shapes the world around us.
                                Currently pursuing my BSc (Hons) in Computer Science and Technology at Sabaragamuwa University of Sri Lanka,
                                I started from exploring basic web design and gradually expanded my skills into full-stack development—learning
                                how to build seamless, interactive, and efficient applications from front to back. Each project I've worked on
                                has strengthened my understanding of modern frameworks, clean design, and user-centered development.
                            </p>
                            <p className="text-gray-300 mb-12">
                                Today, I’m passionate about creating digital experiences that are not only functional but also visually engaging.
                                From developing responsive websites to crafting dynamic mobile applications, I strive to bring creativity and
                                precision into every line of code. My goal is to keep learning, improving, and contributing to meaningful projects
                                that make a real impact in the tech community.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {
                                    aboutInfo.map((data, index) =>
                                        <div key={index} className="bg-black rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2 cursor-pointer">
                                            <div className="flex flex-col items-center text-center mb-4 text-4xl text-blue-700">
                                                <data.icon />
                                            </div>
                                            <h3 className=" text-xl font-semibold mb-5 text-white text-center">{data.title}</h3>
                                            <p className="text-gray-500 text-center">{data.description}</p>
                                        </div>
                                    )
                                }
                            </div>

                        </div>
                    </motion.div>
                </div>
            </div>


        </motion.div>
    )
}

export default About;