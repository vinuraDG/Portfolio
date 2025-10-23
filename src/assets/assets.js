import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot } from 'react-icons/fa';

// Only import images that actually exist
import profileImg from '../assets/profile.jpg';
import projectImg2 from '../assets/project2.png';
import projectImg3 from '../assets/project3.png';
import projectImg4 from '../assets/project4.png';
import projectImg5 from '../assets/project5.png';
import projectImg6 from '../assets/profileR.png';


export const assets = {
    profileImg,
    projectImg2,
    projectImg3,
    projectImg4,
    projectImg5,
    projectImg6,
    
    
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
        tags: ['Firebase', 'Laravel']
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
        title: 'Tools & Technologies',
        icon: FaTools,
        description: 'Essential tools and technologies I use in my development workflow.',
        tags: ['Git & GitHub', 'Figma']
    }
];

export const workData = [
    {
        role: "Senior Frontend Developer",
        company: "TechCorp Inc.",
        duration: "2020 - Present",
        description: "Leading frontend development for enterprise clients, implementing modern frameworks, and mentoring junior developers.",
        color: "purple"
    },
    {
        role: "Web Developer",
        company: "Digital Solutions LLC",
        duration: "2018 - 2020",
        description: "Developed and maintained web applications for various clients, focusing on responsive design and performance optimization.",
        color: "pink"
    },
    {
        role: "Junior Developer",
        company: "StartUp Ventures",
        duration: "2016 - 2018",
        description: "Started my career building basic websites and gradually took on more complex projects as I expanded my skill set.",
        color: "blue"
    }
];
