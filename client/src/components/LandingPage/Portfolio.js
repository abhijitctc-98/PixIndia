import React from 'react';
import { motion } from 'framer-motion';

import Abstract from '../../assets/abstract.png'
import Nature from '../../assets/nature.jpeg'
import Food from '../../assets/food.jpeg'
import Portrait from '../../assets/portrait.jpeg'
import Wild from '../../assets/wild.jpeg'
import Urban from '../../assets/urban.jpg'

const PortfolioItem = ({ image, title }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative overflow-hidden rounded-lg shadow-lg"
    >
      <img src={image} alt={title} className="w-full h-64 object-cover" />
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      >
        <h3 className="text-white text-xl font-bold">{title}</h3>
      </motion.div>
    </motion.div>
  );
};

const Portfolio = () => {
  const portfolioItems = [
    { image: Nature, title: "Nature's Beauty" },
    { image: Urban, title: "Urban Landscapes" },
    { image: Portrait, title: "Portrait Photography" },
    { image: Wild, title: "Wildlife Wonders" },
    { image: Abstract, title: "Abstract Art" },
    { image: Food, title: "Food Photography" },
  ];

  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12">Our Portfolio</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioItems.map((item, index) => (
          <PortfolioItem key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;