import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import CameraClicks from '../Animations/CameraClicks';

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

  /*
  const handleSubmit = (e) => {
    e.preventDefault();
    if (id.trim() === '' || password.trim() === '') {
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
          navigate('/admin-home', { state: { adminUser } });
        } else {
          setError('Invalid credentials');
          setIsLoading(false);
        }
      }, 2000);
    }
  };
*/
useEffect(() => {
    localStorage.removeItem('adminUser');
    window.history.replaceState(null, '', window.location.pathname);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id.trim() === '' || password.trim() === '') {
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
  return (
    <div className="relative flex justify-center items-center h-screen bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-700 overflow-hidden">
      {/* Background image */}
      <CameraClicks />
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10" 
        style={{backgroundImage: "url('https://example.com/path-to-your-authentication-image.jpg')"}}
      ></div>
      
      {/* Sun rays effect */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <div 
            key={i}
            className="absolute top-1/2 left-1/2 w-full h-2 bg-yellow-300 opacity-20"
            style={{
              transform: `translate(-50%, -50%) rotate(${i * 15}deg)`,
              transformOrigin: 'center'
            }}
          ></div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative bg-white p-8 rounded-lg shadow-md w-96"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Admin Login</h2>
        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4 flex items-center">
            <label htmlFor="id" className="w-24">ID:</label>
            <input
              type="text"
              id="id"
              value={id}
              onChange={(e) => setId(e.target.value)}
              className="flex-grow px-3 py-2 border rounded"
            />
          </div>
          <div className="mb-4 flex items-center">
            <label htmlFor="password" className="w-24">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="flex-grow px-3 py-2 border rounded"
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded relative overflow-hidden"
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="flex justify-center items-center">
                <span className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-2"></span>
                Loading...
              </span>
            ) : (
              'Login'
            )}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default AdminLogin;