import React from 'react';
import { motion } from 'framer-motion';

const ShootingStar = () => {
  return (
    <motion.div
      initial={{ x: '-100%', y: '100%', opacity: 0 }}
      animate={{ x: '100%', y: '-100%', opacity: [0, 1, 0] }}
      transition={{ duration: 2, repeat: Infinity, repeatDelay: Math.random() * 5 }}
      className="absolute w-1 h-1 bg-white rounded-full"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }}
    />
  );
};

const ShootingStars = () => {
  return (
    <div className="fixed inset-0 pointer-events-none">
      {[...Array(10)].map((_, i) => (
        <ShootingStar key={i} />
      ))}
    </div>
  );
};

export default ShootingStars;