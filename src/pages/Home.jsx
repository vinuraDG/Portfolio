import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/projects";
import Contact from "../components/contact";


const Home = () => {
    return(
        <div>
            <Hero />
            <About />
            <Skills />
            <Projects/>
            <Contact/>
            
           
        </div>
       
    )
}

export default Home;