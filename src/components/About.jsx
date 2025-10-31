import React from "react"
import { motion } from 'framer-motion'
import { aboutInfo, assets } from "../assets/assets";
import { data } from "react-router-dom";


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
                    <div className="md:w-1/2 rounded-2xl overflow-hidden flex flex-col items-center">
                        <motion.img
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9, ease: "easeOut" }}
                            viewport={{ once: false, amount: 0.2 }}
                            className="w-full h-full object-cover rounded-2xl"
                            src={assets.profileImg}
                            alt="profile"
                        />

                        {/* Download Button under the image */}
                        <div className="mt-7 flex justify-center">
                            <a
                                href="/CV.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out"
                            >
                                {/* svg icon */}
                                <span className="group-hover:underline">Download CV</span>
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
                                Starting from exploring basic web design, I gradually expanded my skills into full-stack development—learning
                                how to build seamless, interactive, and efficient applications from front to back. Each project I’ve worked on
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