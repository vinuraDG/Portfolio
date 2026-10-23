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
                title="Vinura Deelaka | Flutter Developer Portfolio"
                description="Portfolio of Vinura Deelaka, a Flutter developer from Sri Lanka building clean, high-performance mobile apps. Explore projects, skills and certificates."
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