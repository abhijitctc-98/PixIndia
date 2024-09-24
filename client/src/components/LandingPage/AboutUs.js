import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-20"
    >
      <h2 className="text-3xl font-bold mb-8 text-center">About Us</h2>
      <div className="max-w-3xl mx-auto text-center">
        <p className="mb-4">
          PixIndia is a leading photography and visual arts company, dedicated to capturing the essence of India's vibrant culture and landscapes.
        </p>
        <p className="mb-4">
          Our team of skilled photographers and artists work tirelessly to create stunning visuals that tell compelling stories and evoke powerful emotions.
        </p>
        <p>
          With a passion for innovation and a commitment to excellence, we strive to push the boundaries of visual storytelling and create unforgettable imagery.
        </p>
      </div>
    </motion.section>
  );
};

export default AboutUs;