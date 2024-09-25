import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ShootingStars from "../components/Animations/ShootingStars";
import CameraClicks from "../components/Animations/CameraClicks";
import Asteroids from "../components/Animations/Asteroids";
import UserManagementModal from "../components/modals/UserManagementModal";
import TaskAssignmentModal from "../components/modals/TaskAssignmentModal";

const AdminHome = () => {
  const [adminName, setAdminName] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showUserModal, setShowUserModal] = useState(false);
  const [showTaskModal, setShowTaskModal] = useState(false);
  
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = () => {
      const adminUser = JSON.parse(localStorage.getItem("adminUser"));
      if (!adminUser) {
        navigate("/admin-login", { replace: true });
      } else {
        setAdminName(adminUser.name);
      }
    };

    checkAuth();
    window.addEventListener("popstate", checkAuth);

    return () => {
      window.removeEventListener("popstate", checkAuth);
    };
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("adminUser");
    navigate("/admin-login", { replace: true });
  };

  const handleManageUsers = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowUserModal(true);
    }, 1500); // Simulate loading delay
  };

  const handleAssignTasks = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowTaskModal(true);
    }, 1500); // Simulate loading delay
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white relative">
      <ShootingStars />
      <CameraClicks />
      <Asteroids />
      <div className="absolute top-4 right-4">
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="bg-gray-800 px-4 py-2 rounded-md focus:outline-none"
          >
            {adminName} ▼
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg">
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-700"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-8"
      >
        <h1 className="text-4xl font-bold mb-8">Welcome, {adminName}!</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-6 rounded-lg shadow-lg cursor-pointer"
            onClick={handleManageUsers}
          >
            <h2 className="text-2xl font-semibold mb-4">Manage Users</h2>
            <p>Add, edit, or remove user accounts.</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-6 rounded-lg shadow-lg cursor-pointer"
            onClick={handleAssignTasks}
          >
            <h2 className="text-2xl font-semibold mb-4">Assign Tasks</h2>
            <p>Assign tasks to available creators.</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-semibold mb-4">Analytics</h2>
            <p>View site traffic and user engagement data.</p>
          </motion.div>
        </div>
      </motion.div>

      {isLoading && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          {/* Add a game-like loading animation here */}
          <div className="text-white">Loading...</div>
        </div>
      )}

      {/* Manage Users Modal */}
      {showUserModal && <UserManagementModal onClose={() => setShowUserModal(false)} />}

      {/* Assign Tasks Modal */}
      {showTaskModal && <TaskAssignmentModal onClose={() => setShowTaskModal(false)} />}
    </div>
  );
};

export default AdminHome;
