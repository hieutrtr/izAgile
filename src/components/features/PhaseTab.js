import React, { useState } from "react";
import FeaturesSubTab from "./FeaturesSubTab";
import ConstraintsSubTab from "./ConstraintsSubTab";
import TeamSubTab from "./TeamSubTab";
import TasksSubTab from "./TasksSubTab";

function PhaseTab({ phase }) {
  const [activeSubTab, setActiveSubTab] = useState("features");

  const subTabs = [
    { id: "features", label: "Features" },
    { id: "constraints", label: "Constraints" },
    { id: "team", label: "Team" },
    { id: "tasks", label: "Tasks" },
  ];

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">{phase.name}</h2>
      <div className="mb-4 border-b border-gray-200">
        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
          {subTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveSubTab(tab.id)}
              className={`${
                activeSubTab === tab.id
                  ? "border-indigo-500 text-indigo-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
      
      {activeSubTab === "features" && <FeaturesSubTab features={phase.features} />}
      {activeSubTab === "constraints" && <ConstraintsSubTab constraints={phase.constraints} />}
      {activeSubTab === "team" && <TeamSubTab team={phase.team} />}
      {activeSubTab === "tasks" && <TasksSubTab tasks={phase.tasks} />}
    </div>
  );
}

export default PhaseTab;