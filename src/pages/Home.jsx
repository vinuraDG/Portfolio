import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/projects";
import Contact from "../components/contact";
import Achievements from "../components/achievement";


const Home = () => {
    return(
        <div>
            <Hero />
            <About />
            <Skills />
            <Projects/>
            <Achievements/>
            <Contact/>
            
           
        </div>
       
    )
}

export default Home;