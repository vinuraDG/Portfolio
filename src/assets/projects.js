// src/assets/projects.js
import projectImg2 from './project2.png';
import projectImg3 from './project3.png';
import projectImg4 from './project4.png';
import projectImg5 from './project5.png';
import projectImg7 from './project6.png';
import projectImg8 from './project7.png';
import projectImg9 from './project8.png';
import projectImg10 from './project9.png';
import projectImg11 from './project10.png';
import projectImg12 from './project11.png';

import {
  FaVuejs, FaFire, FaJava, FaShoppingCart, FaUserTie,
  FaMicrochip, FaCloud, FaDatabase, FaBluetooth, FaCarSide,
  FaTools, FaMobileAlt, FaReact, FaServer, FaCamera,
  FaNodeJs, FaPython, FaBrain,
  FaHtml5
} from 'react-icons/fa';

export const projects = [
  {
    id: "tealink",
    title: "TeaLink",
    description: "TeaLink is a mobile app designed to help tea land owners (customers) and tea collectors manage the tea harvest and payment process more easily and efficiently.",
    longDescription: "TeaLink bridges the gap between tea land owners and collectors by digitizing the entire harvest-to-payment workflow. The app eliminates manual record-keeping, reduces payment disputes, and provides real-time harvest data to both parties. It features a collector dashboard for logging daily pickups, an owner portal for monitoring yields, and an automated payment calculation engine based on weight and quality grading.",
    image: projectImg2,
    tech: ["Flutter", "Firebase", "Local Storage", "Cloud Firestore", "Git & GitHub"],
    icons: [FaMobileAlt,FaVuejs, FaFire, FaCloud, FaDatabase,],
    code: "https://github.com/vinuraDG/TeaLink",
    features: [
      "Real-time harvest logging by collectors",
      "Automated payment calculation based on weight & grade",
      "Owner dashboard with yield analytics",
      "Push notifications for payment updates",
      "Offline-first data sync with Cloud Firestore"
    ],
    category: "Mobile App",
    status: "Completed",
    year: "2025",
  },
  {
    id: "unigpa",
    title: "UniGPA",
    description: "UniGPA helps university students calculate and track GPA, manage grades, and view academic performance.",
    longDescription: "UniGPA is a comprehensive academic companion for university students. It supports multiple GPA scales, semester-wise grade tracking, and provides visual analytics of academic progress over time. Students can set GPA targets and get predictions on what grades they need to achieve their goals. The local storage engine ensures data privacy without requiring a backend account.",
    image: projectImg3,
    tech: ["Flutter", "Firebase", "Local Storage", "Git & GitHub"],
    icons: [FaMobileAlt, FaDatabase],
    code: "https://github.com/vinuraDG/UniGPA",
    features: [
      "Multi-semester GPA tracking",
      "Target GPA predictor with required grade calculator",
      "Visual performance charts and trend analysis",
      "Support for multiple grading scales (4.0, 4.2, etc.)",
      "Fully offline with secure local storage"
    ],
    category: "Mobile App",
    status: "Completed",
    year: "2025",
  },
  {
    id: "sinhala-ocr",
    title: "Sinhala Handwritten OCR System",
    description: "An advanced AI-driven OCR platform that converts handwritten Sinhala text into digital form in real-time.",
    longDescription: "This OCR system tackles one of the most challenging NLP problems — recognizing handwritten Sinhala script, which contains over 50 base characters with complex ligature combinations. The pipeline uses YOLOv8 for character bounding box detection, a custom-trained CNN for classification, and a dual-engine segmentation approach to handle both isolated and connected characters. The React frontend provides real-time feedback with confidence scores per character, and a Flask API serves the inference pipeline.",
    image: projectImg10,
    tech: ["Python", "React", "TensorFlow", "Flask", "OpenCV", "YOLOv8"],
    icons: [FaPython, FaReact, FaBrain, FaServer, FaCamera],
    code: "https://github.com/vinuraDG/sinhala_ocr_project",
    features: [
      "YOLOv8-powered character detection with bounding boxes",
      "Custom CNN classifier trained on Sinhala character dataset",
      "Dual-engine segmentation for isolated & connected characters",
      "Confidence scoring displayed per recognized character",
      "Real-time inference via Flask REST API",
      "Modern React frontend with live preview"
    ],
    category: "AI / ML",
    status: "Completed",
    year: "2025",
  },
  {
    id: "expense-tracker",
    title: "Expense Tracker",
    description: "A smart expense tracking app built with Flutter to help users manage their personal finances effortlessly.",
    longDescription: "This Expense Tracker app gives users complete control over their personal finances. It supports categorized expense logging, monthly budget setting, and visual breakdowns of spending patterns. Cloudinary handles receipt image uploads, while Cloud Firestore syncs data across devices in real time. The clean dashboard shows spending summaries at a glance, helping users make smarter financial decisions.",
    image: projectImg9,
    tech: ["Flutter", "Firebase", "Cloud Firestore", "Cloudinary", "Git & GitHub"],
    icons: [FaMobileAlt, FaFire, FaCloud, FaDatabase],
    code: "https://github.com/vinuraDG/Island-Paradise",
    features: [
      "Categorized expense and income logging",
      "Monthly budget limits with alert notifications",
      "Receipt photo uploads via Cloudinary",
      "Visual pie & bar charts for spending breakdown",
      "Cross-device sync with Cloud Firestore"
    ],
    category: "Mobile App",
    status: "Completed",
    year: "2025",
  },
  {
    id: "bluetooth-rc-car",
    title: "Bluetooth RC Car",
    description: "An Arduino-powered smart RC car with rear-wheel drive and servo-based front steering, controlled via Bluetooth.",
    longDescription: "This hardware project replicates real vehicle steering mechanics on a miniature scale. The Arduino Uno acts as the brain, processing Bluetooth commands from the HC-05 module and translating them into PWM motor signals and servo angles. The dual-motor rear-wheel drive delivers smooth acceleration, while the servo-controlled front axle enables precise turning. A custom Android app sends directional commands over Bluetooth, achieving sub-100ms response times.",
    image: projectImg11,
    tech: ["Arduino", "C++", "Bluetooth", "Embedded Systems", "Motor Driver", "Servo"],
    icons: [FaMicrochip, FaBluetooth, FaCarSide, FaTools, FaMobileAlt],
    code: "https://github.com/vinuraDG/Bluetooth-RC-Car-Arduino-Servo-Motor-Control",
    features: [
      "Rear-wheel drive with L298N motor driver",
      "Servo-based Ackermann front steering",
      "HC-05 Bluetooth wireless control",
      "PWM speed regulation (0–255 range)",
      "Custom Android controller app",
      "Sub-100ms command response latency"
    ],
    category: "Hardware / IoT",
    status: "Completed",
    year: "2026",
  },
  {
    id: "cupcake-shop",
    title: "Sweet Cupcake Shop Management System",
    description: "A modern Java-based desktop application designed for efficient bakery management with role-based access.",
    longDescription: "This desktop application streamlines day-to-day operations for a cupcake bakery. It implements a dual-role system — managers can add/edit/delete inventory items and manage staff accounts, while cashiers handle point-of-sale transactions and order processing. The SQLite database is bundled with the app for zero-config deployment, and Maven handles all dependencies. The search and filtering system enables fast product lookup during busy service hours.",
    image: projectImg12,
    tech: ["Java", "SQLite", "Maven", "Desktop App"],
    icons: [FaJava, FaDatabase, FaShoppingCart, FaUserTie],
    code: "https://github.com/vinuraDG/Sweet_Cupcake_Shop_system",
    features: [
      "Role-based access: Manager & Cashier roles",
      "Full cupcake inventory CRUD operations",
      "Point-of-sale transaction processing",
      "Advanced search and category filtering",
      "Bundled SQLite — no external DB setup needed",
      "Maven-based build for easy deployment"
    ],
    category: "Desktop App",
    status: "Completed",
    year: "2026",
  },
  {
    id: "convo-chat",
    title: "Convo Chat App",
    description: "A modern, secure, and lightning-fast chatting application built with Flutter with real-time messaging.",
    longDescription: "Convo is a full-featured real-time communication platform built entirely in Flutter. It supports one-on-one messaging with read receipts, voice and video calling via WebRTC integration, and a smooth onboarding flow with phone number verification. Firebase Authentication handles secure sign-in, while Cloud Firestore powers the real-time message sync. The UI features fluid animations and a dark-first design optimized for daily use.",
    image: projectImg8,
    tech: ["Flutter", "Firebase", "Cloud Firestore", "Git & GitHub"],
    icons: [FaMobileAlt, FaFire, FaCloud, FaDatabase],
    code: "https://github.com/vinuraDG/Island-Paradise",
    features: [
      "Real-time one-on-one messaging with read receipts",
      "Voice and video calling support",
      "Firebase Authentication with phone verification",
      "Online/offline presence indicators",
      "Smooth UI animations with Flutter Hero transitions",
      "Dark-first responsive design"
    ],
    category: "Mobile App",
    status: "Completed",
    year: "2025",
  },
  {
    id: "dialbook",
    title: "DialBook Mobile App",
    description: "A simple and efficient mobile app to manage your contacts with a clean and modern interface.",
    longDescription: "DialBook is a privacy-focused contact manager that gives users full control over their address book. It supports adding rich contact profiles with photos, multiple phone numbers, and custom labels. The powerful search engine handles fuzzy matching for quick lookup. All data is stored locally for privacy, with optional Firebase backup. The clean UI prioritizes one-tap dialing and messaging actions.",
    image: projectImg7,
    tech: ["Flutter", "Firebase", "Local Storage", "Git & GitHub"],
    icons: [FaMobileAlt, FaFire, FaCloud, FaDatabase],
    code: "https://github.com/vinuraDG/Island-Paradise",
    features: [
      "Rich contact profiles with photos and labels",
      "Multiple phone numbers per contact",
      "Fuzzy search for instant contact lookup",
      "One-tap call and message shortcuts",
      "Local-first storage with optional cloud backup",
      "Import/export contacts as vCard"
    ],
    category: "Mobile App",
    status: "Completed",
    year: "2025",
  },
  {
    id: "portfolio",
    title: "Portfolio Website",
    description: "A personal portfolio showcasing projects, skills, and blogs with dark/light mode support.",
    longDescription: "This portfolio is built with a performance-first mindset using React and Tailwind CSS. Framer Motion powers all page transitions and scroll-triggered animations for a premium feel. The site features a dynamic project showcase, a skills section with proficiency indicators, a blog module, and a contact form. Dark and light mode are fully supported with system preference detection and manual toggle.",
    image: projectImg4,
    tech: ["HTML", "Tailwind CSS", "Framer Motion"],
    icons: [FaHtml5, FaCloud],
    code: "https://github.com/vinuraDG/Portfolio",
    features: [
      "Scroll-triggered animations via Framer Motion",
      "Dark / Light mode with system preference detection",
      "Dynamic project showcase with detail pages",
      "Responsive across all screen sizes",
      "Optimized Lighthouse performance score",
      "Contact form with validation"
    ],
    category: "Web App",
    status: "Completed",
    year: "2025",
  },
  {
    id: "island-paradise",
    title: "Island Paradise Website",
    description: "A responsive tourism website with immersive visuals and smooth navigation.",
    longDescription: "Island Paradise is a tourism-focused website designed to inspire travelers with immersive full-screen imagery and engaging destination content. Built with semantic HTML, custom CSS animations, and a PHP backend for the contact and booking forms. The site is fully responsive, optimized for mobile browsers, and features a sticky navigation bar, parallax hero section, and an interactive destination gallery.",
    image: projectImg5,
    tech: ["HTML", "CSS", "PHP"],
    icons: [FaHtml5, FaNodeJs, FaDatabase],
    code: "https://github.com/vinuraDG/Island-Paradise",
    features: [
      "Full-screen parallax hero section",
      "Interactive destination image gallery",
      "PHP-powered contact and booking forms",
      "Sticky responsive navigation bar",
      "Custom CSS animations and transitions",
      "SEO-optimized semantic HTML structure"
    ],
    category: "Web App",
    status: "Completed",
    year: "2023",
  },
];