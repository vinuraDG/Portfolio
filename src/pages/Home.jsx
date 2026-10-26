import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/projects";
import Contact from "../components/contact";
import Achievements from "../components/achievement";
import SEO from "../components/SEO";


const Home = () => {
    return(
        <main>
            <SEO
                title="Vinura Deelaka | Software Engineer Portfolio"
                description="Portfolio of Vinura Deelaka, a Software Engineer from Sri Lanka building mobile, web, backend, and AI-powered applications. Explore projects, skills and certificates."
                path="/"
            />
            <Hero />
            <About />
            <Skills />
            <Projects/>
            <Achievements/>
            <Contact/>
        </main>
    )
}

export default Home;