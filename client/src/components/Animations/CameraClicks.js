import React from 'react';
import { motion } from 'framer-motion';

const CameraClick = () => {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: [0, 1.5, 0], opacity: [0, 1, 0] }}
      transition={{ duration: 0.5, repeat: Infinity, repeatDelay: Math.random() * 5 }}
      className="absolute w-4 h-4 bg-white rounded-full"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }}
    />
  );
};

const CameraClicks = () => {
  return (
    <div className="fixed inset-0 pointer-events-none">
      {[...Array(5)].map((_, i) => (
        <CameraClick key={i} />
      ))}
    </div>
  );
};

export default CameraClicks;