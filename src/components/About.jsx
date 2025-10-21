import React from "react"
import {motion} from 'framer-motion'


const About = () => {
    return(
        <motion.div
        initial={{opacity:0, y:50}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.6, ease:'easeInOut'}}
        viewport={{once: true}}
        id='about'
        className='py-20 bg-black/5'
        >
            <div className="container mx-0 px-6">
                
               <h2 className="text-3xl font-bold text-center mb-4 text-white">About
                <span className="text-blue-700">Me</span>
                </h2> 
                <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">Get to know about my background and passion</p>
            </div>

        </motion.div>
    )
}

export default About;