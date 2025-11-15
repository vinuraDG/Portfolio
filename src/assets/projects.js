// src/assets/projects.js
import projectImg2 from './project2.png';
import projectImg3 from './project3.png';
import projectImg4 from './project4.png';
import projectImg5 from './project5.png';
import { FaVuejs, FaFire, FaCloud, FaDatabase, FaReact, FaNodeJs } from 'react-icons/fa';

export const projects = [
  {
    title: "TeaLink",
    description: "TeaLink is a mobile app designed to help tea land owners (customers) and tea collectors manage the tea harvest and payment process more easily and efficiently.",
    image: projectImg2,
    tech: ["Flutter", "Firebase"],
    icons: [FaVuejs, FaFire, FaCloud, FaDatabase],
    code: "https://github.com/vinuraDG/TeaLink",
  },
  {
    title: "UniGPA",
    description: "UniGPA helps university students calculate and track GPA, manage grades, and view academic performance.",
    image: projectImg3,
    tech: ["Flutter", "Firebase"],
    icons: [FaReact, FaDatabase],
    code: "https://github.com/vinuraDG/UniGPA",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio showcasing projects, skills, and blogs with dark/light mode support.",
    image: projectImg4,
    tech: ["React.js", "Tailwind CSS", "Framer Motion"],
    icons: [FaReact, FaCloud],
    code: "https://github.com/vinuraDG/Portfolio",
  },
  {
    title: "Island Paradise Website",
    description: "A responsive tourism website with immersive visuals and smooth navigation.",
    image: projectImg5,
    tech: ["HTML", "CSS", "PHP"],
    icons: [FaReact, FaNodeJs, FaDatabase],
    code: "https://github.com/vinuraDG/Island-Paradise",
  },
];
