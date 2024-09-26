import React, { useState, useEffect } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { motion, AnimatePresence } from 'framer-motion';

const UserManagementModal = ({ onClose }) => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    mobile: "",
    address: "",
  });
  const [activeTab, setActiveTab] = useState("view");
  const [editUserId, setEditUserId] = useState(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      // TODO: Replace with API call to fetch users
      setUsers([
        {
          id: 1,
          name: "John Doe",
          email: "john@example.com",
          password: "pass123",
          age: 30,
          mobile: "+1234567890",
          address: "123 Main St",
        },
        {
          id: 2,
          name: "Jane Smith",
          email: "jane@example.com",
          password: "pass456",
          age: 25,
          mobile: "+0987654321",
          address: "456 Oak St",
        },
      ]);
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    // Clear error message when user starts typing
    if (Object.values(newUser).some(value => value.trim() !== '')) {
      setError('');
    }
  }, [newUser]);

  const validateForm = () => {
    if (Object.values(newUser).some(value => value.trim() === '')) {
      setError('Please fill in all fields');
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(newUser.email)) {
      setError('Please enter a valid email address');
      return false;
    }
    if (newUser.password.length < 6) {
      setError('Password must be at least 6 characters long');
      return false;
    }
    if (isNaN(newUser.age) || parseInt(newUser.age) <= 0) {
      setError('Please enter a valid age');
      return false;
    }
    if (!/^\+?[1-9]\d{1,14}$/.test(newUser.mobile)) {
      setError('Please enter a valid mobile number');
      return false;
    }
    return true;
  };

  const handleAddUser = () => {
    if (validateForm()) {
      setIsLoading(true);
      // Simulate API call
      setTimeout(() => {
        setUsers([...users, { id: users.length + 1, ...newUser }]);
        setNewUser({
          name: "",
          email: "",
          password: "",
          age: "",
          mobile: "",
          address: "",
        });
        setIsLoading(false);
        setActiveTab("view");
      }, 1000);
    }
  };

  const handleEditUser = (userId) => {
    const user = users.find((u) => u.id === userId);
    setNewUser(user);
    setEditUserId(userId);
    setActiveTab("add");
    setError('');
  };

  const handleUpdateUser = () => {
    if (validateForm()) {
      setIsLoading(true);
      // Simulate API call
      setTimeout(() => {
        setUsers(users.map((u) => (u.id === editUserId ? newUser : u)));
        setNewUser({
          name: "",
          email: "",
          password: "",
          age: "",
          mobile: "",
          address: "",
        });
        setEditUserId(null);
        setActiveTab("view");
        setIsLoading(false);
      }, 1000);
    }
  };

  const handleDeleteUser = (userId) => {
    setUsers(users.filter((user) => user.id !== userId));
  };

  const errorVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.8, opacity: 0 },
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-gray-800 text-white p-8 rounded-lg w-full max-w-4xl">
        <h2 className="text-2xl font-bold mb-4">Manage Users</h2>
        <button className="absolute top-2 right-2 text-white" onClick={onClose}>
          Close
        </button>

        {/* Tabs */}
        <div className="flex mb-6 border-b border-gray-600">
          <button
            className={`px-4 py-2 ${
              activeTab === "view" ? "text-blue-400" : "text-gray-400"
            }`}
            onClick={() => setActiveTab("view")}
          >
            View Creators
          </button>
          <button
            className={`px-4 py-2 ${
              activeTab === "add" ? "text-blue-400" : "text-gray-400"
            }`}
            onClick={() => {
              setActiveTab("add");
              setEditUserId(null);
              setNewUser({
                name: "",
                email: "",
                password: "",
                age: "",
                mobile: "",
                address: "",
              });
              setError('');
            }}
          >
            Add Creators
          </button>
        </div>

        {/* Tab content */}
        {activeTab === "view" && (
          <div className="space-y-4">
            {users.map((user) => (
              <div
                key={user.id}
                className="flex justify-between items-center bg-gray-700 p-4 rounded-md"
              >
                <div>
                  <p>Name: {user.name}</p>
                  <p>Email: {user.email}</p>
                  <p>Mobile: {user.mobile}</p>
                </div>
                <div className="flex space-x-2">
                  <FaEdit
                    className="text-yellow-400 cursor-pointer"
                    onClick={() => handleEditUser(user.id)}
                  />
                  <FaTrash
                    className="text-red-400 cursor-pointer"
                    onClick={() => handleDeleteUser(user.id)}
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "add" && (
          <div className="mt-4">
            <h3 className="text-xl font-semibold mb-4">
              {editUserId ? "Edit User" : "Add New User"}
            </h3>
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
            <input
              className="w-full mb-2 p-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Name"
              value={newUser.name}
              onChange={(e) =>
                setNewUser({ ...newUser, name: e.target.value })
              }
            />
            <input
              className="w-full mb-2 p-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Email"
              value={newUser.email}
              onChange={(e) =>
                setNewUser({ ...newUser, email: e.target.value })
              }
            />
            <input
              className="w-full mb-2 p-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Password"
              type="password"
              value={newUser.password}
              onChange={(e) =>
                setNewUser({ ...newUser, password: e.target.value })
              }
            />
            <input
              className="w-full mb-2 p-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Age"
              value={newUser.age}
              onChange={(e) => setNewUser({ ...newUser, age: e.target.value })}
            />
            <input
              className="w-full mb-2 p-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Mobile"
              value={newUser.mobile}
              onChange={(e) =>
                setNewUser({ ...newUser, mobile: e.target.value })
              }
            />
            <input
              className="w-full mb-2 p-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Address"
              value={newUser.address}
              onChange={(e) =>
                setNewUser({ ...newUser, address: e.target.value })
              }
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-blue-500 text-white py-2 rounded-full font-semibold relative overflow-hidden hover:bg-blue-600 transition duration-300"
              onClick={editUserId ? handleUpdateUser : handleAddUser}
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="flex justify-center items-center">
                  <span className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-2"></span>
                  Loading...
                </span>
              ) : (
                editUserId ? "Update User" : "Add User"
              )}
            </motion.button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserManagementModal;