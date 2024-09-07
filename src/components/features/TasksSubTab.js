import React from "react";

function TasksSubTab({ tasks }) {
  return (
    <div className="mt-4">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Tasks</h3>
      <ul className="space-y-4">
        {tasks.map((task, index) => (
          <li key={index} className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h4 className="text-lg leading-6 font-medium text-gray-900">{task.name}</h4>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">{task.description}</p>
              <p className="mt-1 text-sm text-gray-500">Estimated time: {task.estimated_time}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TasksSubTab;