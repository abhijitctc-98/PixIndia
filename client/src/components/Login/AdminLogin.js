import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import CameraClicks from '../Animations/CameraClicks';
import { Link } from 'react-router-dom';

// Predefined admin credentials
const adminCredentials = [
  { id: "admin1", password: "password1", name: "ADMIN" },
  { id: "Tinkua", password: "password2", name: "Riyansh" }
];

const AdminLogin = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem('adminUser');
    window.history.replaceState(null, '', window.location.pathname);
  }, []);

  useEffect(() => {
    // Clear error message when user starts typing
    if (id.trim() !== '' || password.trim() !== '') {
      setError('');
    }
  }, [id, password]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id.trim() === '' && password.trim() === '') {
      setError('Please enter all fields');
    } else if (id.trim() === '' || password.trim() === '') {
      setError('Please fill in all fields');
    } else if (password.length < 6) {
      setError('Password must be at least 6 characters long');
    } else {
      setIsLoading(true);
      // Simulate API call
      setTimeout(() => {
        const adminUser = adminCredentials.find(
          (cred) => cred.id === id && cred.password === password
        );
        if (adminUser) {
          // Storing the admin user data in localStorage
          localStorage.setItem('adminUser', JSON.stringify(adminUser));
          navigate('/admin-home', { replace: true });
        } else {
          setError('Invalid credentials');
          setIsLoading(false);
        }
      }, 2000);
    }
  }

  const errorVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.8, opacity: 0 },
  };

  return (
    <div className="relative flex justify-center items-center h-screen bg-gray-900 overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800"></div>
      <CameraClicks />
      {/* Spotify-like circular gradients */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative bg-gray-800 p-8 rounded-lg shadow-lg w-96"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-white">Admin Login</h2>
        <AnimatePresence>
          {error && (
            <motion.p
              variants={errorVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="text-red-400 mb-4 text-center"
            >
              {error}
            </motion.p>
          )}
        </AnimatePresence>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="id" className="block text-sm font-medium text-gray-300 mb-1">ID</label>
            <input
              type="text"
              id="id"
              value={id}
              onChange={(e) => setId(e.target.value)}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-full font-semibold relative overflow-hidden hover:bg-green-600 transition duration-300"
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="flex justify-center items-center">
                <span className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-2"></span>
                Loading...
              </span>
            ) : (
              'LOG IN'
            )}
          </motion.button>
        </form>
        <Link to="/" className="text-white hover:text-gray-300 flex justify-center items-center mt-3 overflow-hidden hover:text-green-600 transition duration-300">
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
};

export default AdminLogin;