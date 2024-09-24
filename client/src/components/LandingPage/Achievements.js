import React from 'react';
import { motion } from 'framer-motion';

const Achievement = ({ title, description, image }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 mb-8"
    >
      <motion.img
        whileHover={{ scale: 1.1 }}
        src={image}
        alt={title}
        className="w-24 h-24 object-cover rounded-full"
      />
      <div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p>{description}</p>
      </div>
    </motion.div>
  );
};

const Achievements = () => {
  const achievements = [
    { title: "Best Photography 2022", description: "Won the national award for best photography", image: "/placeholder.svg?height=96&width=96" },
    { title: "100K Instagram Followers", description: "Reached a milestone of 100K followers", image: "/placeholder.svg?height=96&width=96" },
    { title: "Featured in National Geographic", description: "Our work was featured in National Geographic", image: "/placeholder.svg?height=96&width=96" },
  ];

  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12">Our Achievements</h2>
      <div className="max-w-3xl mx-auto">
        {achievements.map((achievement, index) => (
          <Achievement key={index} {...achievement} />
        ))}
      </div>
    </section>
  );
};

export default Achievements;