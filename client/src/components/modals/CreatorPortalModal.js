import React, { useState, useEffect } from "react";

const CreatorPortalModal = ({ onClose }) => {
  const [ongoingTasks, setOngoingTasks] = useState([]);
  const [deliveredTasks, setDeliveredTasks] = useState([]);
  const [activeTab, setActiveTab] = useState("Ongoing");

  useEffect(() => {
    // Simulated task data
    const allTasks = [
      {
        id: 11,
        name: "Tobby's First Birthday",
        assignedDate: "13-08-2024",
        deliveredDate: "17-09-2024",
        status: "Delivered",
      },
      {
        id: 765,
        name: "Ring Ceremony",
        assignedDate: "13-06-2024",
        deliveredDate: "23-08-2024",
        status: "Delivered",
      },
      {
        id: 123,
        name: "Wedding Shoot",
        assignedDate: "12-09-2024",
        deliveredDate: "",
        status: "Ongoing",
      },
      {
        id: 333,
        name: "Panda's 16th Birthday",
        assignedDate: "05-07-2024",
        deliveredDate: "",
        status: "Ongoing",
      },
    ];

    const ongoing = allTasks.filter((task) => task.status === "Ongoing" && task.deliveredDate === "");
    const delivered = allTasks.filter((task) => task.status === "Delivered" && task.deliveredDate.length > 0);

    setOngoingTasks(ongoing);
    setDeliveredTasks(delivered);
  }, []);

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-90 flex justify-center items-center">
      <div className="bg-white text-black rounded-lg p-8 w-full max-w-3xl md:max-w-2xl lg:max-w-lg"> {/* Fixed width */}
        <h2 className="text-xl font-semibold mb-4">Creator Portal</h2>

        {/* Tabs Navigation */}
        <div className="flex justify-around mb-4">
          <button
            className={`py-2 px-4 rounded ${activeTab === "Ongoing" ? "bg-gray-900 text-white" : "bg-gray-200 text-black"}`}
            onClick={() => setActiveTab("Ongoing")}
          >
            Ongoing Tasks
          </button>
          <button
            className={`py-2 px-4 rounded ${activeTab === "Delivered" ? "bg-gray-900 text-white" : "bg-gray-200 text-black"}`}
            onClick={() => setActiveTab("Delivered")}
          >
            Delivered Tasks
          </button>
        </div>

        {/* Container for both tables with consistent table structure */}
        <div className="overflow-x-auto">
          <table className="w-full text-left table-fixed"> {/* Table fixed layout */}
            <thead>
              <tr>
                <th className="p-2 w-1/2">Task Name</th>
                {activeTab === "Ongoing" ? (
                  <th className="p-2 w-1/2">Assigned Date</th>
                ) : (
                  <th className="p-2 w-1/2">Delivered Date</th>
                )}
              </tr>
            </thead>
            <tbody>
              {activeTab === "Ongoing" ? (
                ongoingTasks.length > 0 ? (
                  ongoingTasks.map((task) => (
                    <tr key={task.id}>
                      <td className="p-2">{task.name}</td>
                      <td className="p-2">{task.assignedDate}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td className="p-2" colSpan="2">No ongoing tasks found.</td>
                  </tr>
                )
              ) : deliveredTasks.length > 0 ? (
                deliveredTasks.map((task) => (
                  <tr key={task.id}>
                    <td className="p-2">{task.name}</td>
                    <td className="p-2">{task.deliveredDate}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="p-2" colSpan="2">No delivered tasks found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Close Button */}
        <button className="mt-4 bg-gray-800 text-white py-2 px-4 rounded" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default CreatorPortalModal;
