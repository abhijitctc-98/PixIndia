import React, { useState, useEffect } from "react";

const ManageTasksModal = ({ onClose }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    /*
    // Simulating fetching tasks for the creator
    const fetchedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    */
    let sampleTasks = [
        {
            id: 11,
            name: "XX",
            assignedDate: "13-08-2024",
            deliveredDate: "17-09-2024",
            status: "Delivered"
        },
        {
            id: 765,
            name: "Ring Ceremony",
            assignedDate: "13-06-2024",
            deliveredDate: "23-08-2024",
            status: "Delivered"
        },
        {
            id: 123,
            name: "Wedding Shoot",
            assignedDate: "12-09-2024",
            deliveredDate: "",
            status: "Ongoing"
        },
        {
            id: 333,
            name: "Panda's 16th Birthday",
            assignedDate: "05-07-2024",
            deliveredDate: "",
            status: "Ongoing"
        }
    ]
    setTasks(sampleTasks);
  }, []);

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const handleAcceptTask = (taskId) => {
    const acceptedTask = tasks.find(task => task.id === taskId);
    console.log("Prompt dialog for accepting task", acceptedTask);
    // Show dialog to accept task with current date, delivery date, and file URL
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-90 flex justify-center items-center">
      <div className="bg-white text-black rounded-lg p-8 w-3/4">
        <h2 className="text-xl font-semibold mb-4">Manage Tasks</h2>
        {tasks.length > 0 ? (
          <table className="w-full text-left">
            <thead>
              <tr>
                <th className="p-2">Task Name</th>
                <th className="p-2">Status</th>
                <th className="p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task) => (
                <tr key={task.id}>
                  <td className="p-2">{task.name}</td>
                  <td className="p-2">{task.status}</td>
                  <td className="p-2">
                    <button
                      className="mr-4 text-green-500"
                      onClick={() => handleAcceptTask(task.id)}
                    >
                      Accept
                    </button>
                    <button
                      className="text-red-500"
                      onClick={() => handleDeleteTask(task.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="text-center">
            <p>No Tasks Found</p>
            <img src="path-to-your-gif.gif" alt="No Tasks" />
          </div>
        )}
        <button className="mt-4 bg-gray-800 text-white py-2 px-4 rounded" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ManageTasksModal;
