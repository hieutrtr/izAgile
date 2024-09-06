import React from "react";

const featuresData = {
  phase1: [
    { name: "Feature 1", description: "Description of feature 1" },
    { name: "Feature 2", description: "Description of feature 2" },
  ],
  phase2: [
    { name: "Feature 3", description: "Description of feature 3" },
    { name: "Feature 4", description: "Description of feature 4" },
  ],
  phase3: [
    { name: "Feature 5", description: "Description of feature 5" },
    { name: "Feature 6", description: "Description of feature 6" },
  ],
};

function FeaturesSubTab({ phaseId }) {
  const features = featuresData[phaseId] || [];

  return (
    <div className="mt-4">
      <h3 className="text-lg font-medium text-secondary mb-4">Features for {phaseId}</h3>
      <ul className="space-y-4">
        {features.map((feature, index) => (
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

export default FeaturesSubTab;