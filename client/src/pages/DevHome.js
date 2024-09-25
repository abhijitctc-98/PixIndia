import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ShootingStars from "../components/Animations/ShootingStars";
import CameraClicks from "../components/Animations/CameraClicks";
import Asteroids from "../components/Animations/Asteroids";
import ManageTasksModal from "../components/modals/ManageTasksModal";
import CreatorPortalModal from "../components/modals/CreatorPortalModal";

const DevHome = () => {
  const [creatorName, setCreatorName] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showManageTasksModal, setShowManageTasksModal] = useState(false);
  const [showCreatorPortalModal, setShowCreatorPortalModal] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = () => {
      const devUser = JSON.parse(localStorage.getItem("devUser"));
      if (!devUser) {
        navigate("/dev-login", { replace: true });
      } else {
        setCreatorName(devUser.name);
      }
    };

    checkAuth();
    window.addEventListener("popstate", checkAuth);

    return () => {
      window.removeEventListener("popstate", checkAuth);
    };
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("devUser");
    navigate("/dev-login", { replace: true });
  };

  const handleManageTasks = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowManageTasksModal(true);
    }, 1500); // Simulate loading delay
  };

  const handleCreatorPortal = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowCreatorPortalModal(true);
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
            {creatorName} ▼
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
        <h1 className="text-4xl font-bold mb-8">Welcome Creator, {creatorName}!</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-6 rounded-lg shadow-lg cursor-pointer"
            onClick={handleCreatorPortal}
          >
            <h2 className="text-2xl font-semibold mb-4">Creator Portal</h2>
            <p>View ongoing and delivered tasks.</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-6 rounded-lg shadow-lg cursor-pointer"
            onClick={handleManageTasks}
          >
            <h2 className="text-2xl font-semibold mb-4">Manage Tasks</h2>
            <p>View, accept, or delete assigned tasks.</p>
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
          <div className="text-white">Loading...</div>
        </div>
      )}

      {/* Manage Tasks Modal */}
      {showManageTasksModal && <ManageTasksModal onClose={() => setShowManageTasksModal(false)} />}

      {/* Creator Portal Modal */}
      {showCreatorPortalModal && <CreatorPortalModal onClose={() => setShowCreatorPortalModal(false)} />}
    </div>
  );
};

export default DevHome;
