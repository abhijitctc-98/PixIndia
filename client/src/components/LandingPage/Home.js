import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-20 text-center"
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to PixIndia</h1>
      <p className="text-xl md:text-2xl mb-8">Capturing moments, creating memories</p>
      <Link to="/portfolio">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-500 text-white px-8 py-3 rounded-full text-lg font-semibold"
        >
          Explore Our Work
        </motion.button>
      </Link>
    </motion.section>
  );
};

export default Home;