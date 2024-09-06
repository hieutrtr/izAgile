import React, { useState } from "react";
import FeaturesSubTab from "./FeaturesSubTab";
import ConstraintsSubTab from "./ConstraintsSubTab";
import TeamSubTab from "./TeamSubTab";
import TasksSubTab from "./TasksSubTab";

const subTabs = [
  { id: "features", label: "Features" },
  { id: "constraints", label: "Constraints" },
  { id: "team", label: "Team" },
  { id: "tasks", label: "Tasks" },
];

function PhaseTab({ phaseId }) {
  const [activeSubTab, setActiveSubTab] = useState(subTabs[0].id);

  return (
    <div>
      <div className="mb-4 border-b border-tertiary">
        <nav className="-mb-px flex space-x-8" aria-label="Sub Tabs">
          {subTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveSubTab(tab.id)}
              className={`${
                activeSubTab === tab.id
                  ? "border-primary text-primary"
                  : "border-transparent text-quaternary hover:text-secondary hover:border-quaternary"
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {activeSubTab === "features" && <FeaturesSubTab phaseId={phaseId} />}
      {activeSubTab === "constraints" && <ConstraintsSubTab phaseId={phaseId} />}
      {activeSubTab === "team" && <TeamSubTab phaseId={phaseId} />}
      {activeSubTab === "tasks" && <TasksSubTab phaseId={phaseId} />}
    </div>
  );
}

export default PhaseTab;