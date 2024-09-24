import React from 'react';
import { motion } from 'framer-motion';
import ShootingStars from '../components/Animations/ShootingStars';
import CameraClicks from '../components/Animations/CameraClicks';
import Asteroids from '../components/Animations/Asteroids';

const DevHome = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <ShootingStars />
      <CameraClicks />
      <Asteroids />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-8"
      >
        <h1 className="text-4xl font-bold mb-8">Welcome, Developer!</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-semibold mb-4">Current Projects</h2>
            <p>View and manage your ongoing projects.</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-semibold mb-4">Task Board</h2>
            <p>Track your tasks and deadlines.</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-semibold mb-4">Code Repository</h2>
            <p>Access and manage project code repositories.</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default DevHome;