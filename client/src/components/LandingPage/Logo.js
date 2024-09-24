import React from 'react';
import { motion } from 'framer-motion';

const Logo = () => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5, type: 'spring', stiffness: 260, damping: 20 }}
      className="text-3xl font-bold text-center py-1"
    >
      <motion.span
        animate={{ color: ['#ff0000', '#00ff00', '#0000ff', '#ff0000'] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Pix
      </motion.span>
      <motion.span
        animate={{ color: ['#0000ff', '#ff0000', '#00ff00', '#0000ff'] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        India
      </motion.span>
    </motion.div>
  );
};

export default Logo;