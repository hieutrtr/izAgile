import React from "react";

const tasksData = {
  phase1: [
    { name: "Task 1", description: "Description of task 1" },
    { name: "Task 2", description: "Description of task 2" },
  ],
  phase2: [
    { name: "Task 3", description: "Description of task 3" },
    { name: "Task 4", description: "Description of task 4" },
  ],
  phase3: [
    { name: "Task 5", description: "Description of task 5" },
    { name: "Task 6", description: "Description of task 6" },
  ],
};

function TasksSubTab({ phaseId }) {
  const tasks = tasksData[phaseId] || [];

  return (
    <div className="mt-4">
      <h3 className="text-lg font-medium text-secondary mb-4">Tasks for {phaseId}</h3>
      <ul className="space-y-4">
        {tasks.map((task, index) => (
          <li key={index} className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h4 className="text-lg leading-6 font-medium text-secondary">{task.name}</h4>
              <p className="mt-1 max-w-2xl text-sm text-quaternary">{task.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TasksSubTab;