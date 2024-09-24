import React from 'react';
import { motion } from 'framer-motion';

const Asteroid = () => {
  const size = Math.random() * 10 + 5;
  return (
    <motion.div
      initial={{ x: '-100%', y: '-100%', rotate: 0 }}
      animate={{ x: '200%', y: '200%', rotate: 360 }}
      transition={{ duration: Math.random() * 10 + 5, repeat: Infinity, ease: "linear" }}
      className="absolute bg-gray-400 rounded-full"
      style={{
        width: size,
        height: size,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }}
    />
  );
};

const Asteroids = () => {
  return (
    <div className="fixed inset-0 pointer-events-none">
      {[...Array(15)].map((_, i) => (
        <Asteroid key={i} />
      ))}
    </div>
  );
};

export default Asteroids;