import React from "react";

const constraintsData = {
  phase1: [
    { name: "Constraint 1", description: "Description of Constraint 1" },
    { name: "Constraint 2", description: "Description of Constraint 2" },
  ],
  phase2: [
    { name: "Feature 3", description: "Description of Constraint 3" },
    { name: "Feature 4", description: "Description of Constraint 4" },
  ],
  phase3: [
    { name: "Constraint 5", description: "Description of Constraint 5" },
    { name: "Constraint 6", description: "Description of Constraint 6" },
  ],
};

function ConstraintsSubTab({ phaseId }) {
  const constraints = constraintsData[phaseId] || [];

  return (
    <div className="mt-4">
      <h3 className="text-lg font-medium text-secondary mb-4">Constraints for {phaseId}</h3>
      <ul className="space-y-4">
        {constraints.map((feature, index) => (
          <li key={index} className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h4 className="text-lg leading-6 font-medium text-secondary">{feature.name}</h4>
              <p className="mt-1 max-w-2xl text-sm text-quaternary">{feature.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ConstraintsSubTab;