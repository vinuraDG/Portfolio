import React from 'react'
import { motion } from 'framer-motion'

const Particle = ({ delay, duration, startX, startY, size, color, drift }) => {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        opacity: 0.6,
      }}
      initial={{ x: startX, y: startY, opacity: 0 }}
      animate={{
        x: [startX, startX + drift],
        y: [startY, -100],
        opacity: [0, 0.8, 0],
      }}
      transition={{
        duration: duration,
        delay: delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
};

const ParticleBackground = () => {
  // Generate particles with random properties - INCREASED FROM 30 TO 80
  const particles = Array.from({ length: 80 }).map((_, i) => ({
    id: i,
    delay: i * 0.1,
    duration: 8 + Math.random() * 4,
    startX: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920),
    startY: typeof window !== 'undefined' ? window.innerHeight + 50 : 1080,
    size: `${4 + Math.random() * 9}px`,
    color: ['#3b82f6', '#7cafecff', '#072191ff'][Math.floor(Math.random() * 3)],
    drift: -50 + Math.random() * 100,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((particle) => (
        <Particle key={particle.id} {...particle} />
      ))}
    </div>
  );
};

export default ParticleBackground;