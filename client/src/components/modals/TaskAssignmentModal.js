import React, { useState, useEffect } from "react";

const glowEffect = {
    animation: 'glow 1.5s infinite alternate',
    textShadow: '0 0 10px #ff0000, 0 0 15px #ff0000, 0 0 30px #ff0000',
};

const TaskAssignmentModal = ({ onClose }) => {
  const [users, setUsers] = useState([]);
  const [taskId, setTaskId] = useState("");
  const [selectedUserId, setSelectedUserId] = useState(null);

  // Simulate fetching user data
  useEffect(() => {
    const fetchUsers = async () => {
      // Replace with API call if necessary
      setUsers([
        { id: 1, name: "John Doe", status: "Available" },
        { id: 2, name: "Jane Smith", status: "Available" },
        { id: 3, name: "Alice Johnson", status: "Busy" },
      ]);
    };

    fetchUsers();
  }, []);

  const handleAssignTask = () => {
    if (selectedUserId && taskId) {
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === selectedUserId
            ? { ...user, status: "BUSY" }
            : user
        )
      );
      setTaskId("");
      setSelectedUserId(null);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-gray-800 text-white p-8 rounded-lg w-full max-w-4xl">
        <h2 className="text-2xl font-bold mb-4">Assign Tasks</h2>
        <button className="absolute top-2 right-2 text-white" onClick={onClose}>
          Close
        </button>

        {/* Task Assignment Section */}
        <div className="mb-4">
          <label className="block mb-2">Task ID:</label>
          <input
            className="w-full mb-4 p-2 bg-gray-700 rounded"
            placeholder="Enter Task ID"
            value={taskId}
            onChange={(e) => setTaskId(e.target.value)}
          />

          <label className="block mb-2">Assign to:</label>
          <select
            className="w-full p-2 bg-gray-700 rounded mb-4"
            value={selectedUserId || ""}
            onChange={(e) => setSelectedUserId(parseInt(e.target.value))}
          >
            <option value="" disabled>Select a user</option>
            {users
              .filter((user) => user.status !== "BUSY")
              .map((user) => (
                <option key={user.id} value={user.id}>
                  {user.name} ({user.status})
                </option>
              ))}
          </select>

          <button
            className="bg-blue-500 px-4 py-2 rounded"
            onClick={handleAssignTask}
            disabled={!taskId || !selectedUserId}
          >
            Assign Task
          </button>
        </div>

        {/* User List with Status */}
        <div>
          <h3 className="text-xl font-semibold mb-4">User List</h3>
          <div className="space-y-4">
            {users.map((user) => (
              <div
                key={user.id}
                className="flex justify-between items-center bg-gray-700 p-4 rounded-md"
              >
                <p>{user.name}</p>
                <p
                   style={user.status === 'BUSY' ? glowEffect : {}}
                >
                  {user.status}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskAssignmentModal;
