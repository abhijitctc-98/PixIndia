import React, { useState, useEffect } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

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
  const [activeTab, setActiveTab] = useState("view"); // Tab state (view or add)
  const [editUserId, setEditUserId] = useState(null);

  // Simulate API fetch on load
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

  const handleAddUser = () => {
    if (newUser.name && newUser.email && newUser.mobile) {
      setUsers([...users, { id: users.length + 1, ...newUser }]);
      setNewUser({
        name: "",
        email: "",
        password: "",
        age: "",
        mobile: "",
        address: "",
      });
    }
  };

  const handleEditUser = (userId) => {
    const user = users.find((u) => u.id === userId);
    setNewUser(user);
    setEditUserId(userId);
    setActiveTab("add");
  };

  const handleUpdateUser = () => {
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
  };

  const handleDeleteUser = (userId) => {
    setUsers(users.filter((user) => user.id !== userId));
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
            <input
              className="w-full mb-2 p-2 bg-gray-700 rounded"
              placeholder="Name"
              value={newUser.name}
              onChange={(e) =>
                setNewUser({ ...newUser, name: e.target.value })
              }
            />
            <input
              className="w-full mb-2 p-2 bg-gray-700 rounded"
              placeholder="Email"
              value={newUser.email}
              onChange={(e) =>
                setNewUser({ ...newUser, email: e.target.value })
              }
            />
            <input
              className="w-full mb-2 p-2 bg-gray-700 rounded"
              placeholder="Password"
              value={newUser.password}
              onChange={(e) =>
                setNewUser({ ...newUser, password: e.target.value })
              }
            />
            <input
              className="w-full mb-2 p-2 bg-gray-700 rounded"
              placeholder="Age"
              value={newUser.age}
              onChange={(e) => setNewUser({ ...newUser, age: e.target.value })}
            />
            <input
              className="w-full mb-2 p-2 bg-gray-700 rounded"
              placeholder="Mobile"
              value={newUser.mobile}
              onChange={(e) =>
                setNewUser({ ...newUser, mobile: e.target.value })
              }
            />
            <input
              className="w-full mb-2 p-2 bg-gray-700 rounded"
              placeholder="Address"
              value={newUser.address}
              onChange={(e) =>
                setNewUser({ ...newUser, address: e.target.value })
              }
            />
            <button
              className="bg-blue-500 px-4 py-2 rounded"
              onClick={editUserId ? handleUpdateUser : handleAddUser}
            >
              {editUserId ? "Update User" : "Add User"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserManagementModal;
