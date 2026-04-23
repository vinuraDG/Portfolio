// src/assets/assets.js

import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaLinux, FaDatabase } from 'react-icons/fa';

import profileImg from './profile.jpg';
import projectImg2 from './project2.png';
import projectImg3 from './project3.png';
import projectImg4 from './project4.png';
import projectImg5 from './project5.png';
import projectImg6 from './profileR.png';
import projectImg7 from './project6.png';
import projectImg8 from './project7.png';
import projectImg9 from './project8.png';
import projectImg10 from './project9.png';
import projectImg11 from './project10.png';
import projectImg12 from './project11.png';
import aboutImg from './about_image.png';

export const assets = {
    profileImg,
    projectImg2,
    projectImg3,
    projectImg4,
    projectImg5,
    projectImg6,
    projectImg7,
    projectImg8,
    projectImg9,
    projectImg10,
    projectImg11,
    projectImg12,
    aboutImg,
};

export const aboutInfo = [
    {
        icon: FaLightbulb,
        title: 'Innovative',
        description: 'I love creating unique solutions to complex problems with cutting-edge technologies.',
        color: 'text-purple'
    },
    {
        icon: FaPaintBrush,
        title: 'Design Oriented',
        description: 'Beautiful design and user experience are at the heart of everything I create.',
        color: 'text-pink'
    },
    {
        icon: FaCode,
        title: 'Clean Code',
        description: 'I write maintainable, efficient code following best practices and modern patterns.',
        color: 'text-blue'
    }
];

export const skills = [
    {
        title: 'Frontend Development',
        icon: FaReact,
        description: 'Building responsive and interactive user interfaces with modern frameworks.',
        tags: ['React']
    },
    {
        title: 'Backend Development',
        icon: FaServer,
        description: 'Creating robust server-side applications and RESTful APIs.',
        tags: ['Firebase']
    },
    {
        title: 'Programming Languages',
        icon: FaCode,
        description: 'Core programming languages for diverse development needs.',
        tags: ['Python', 'Java', 'C', 'C++', 'C#', 'JavaScript']
    },
    {
        title: 'Database Management',
        icon: FaDatabase,
        description: 'Designing and optimizing databases for performance and scalability.',
        tags: ['MySQL', 'Firebase']
    },
    {
        title: 'Mobile Development',
        icon: FaMobileAlt,
        description: 'Building cross-platform mobile applications with modern tools.',
        tags: ['Flutter']
    },
    {
        title: 'Operating Systems & Tools',
        icon: FaLinux,
        description: 'Experience with Linux environments and command-line tooling.',
        tags: ['Linux (Ubuntu)', 'Command-line proficiency', 'Shell scripting']
    },
    {
        title: 'Tools & Technologies',
        icon: FaTools,
        description: 'Essential tools and technologies I use in my development workflow.',
        tags: ['Git & GitHub', 'Figma']
    }
];