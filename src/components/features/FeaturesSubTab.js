import React from "react";

function FeaturesSubTab({ features }) {
  return (
    <div className="mt-4">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Features</h3>
      <ul className="space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h4 className="text-lg leading-6 font-medium text-gray-900">{feature.name}</h4>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">{feature.description}</p>
              <p className="mt-1 text-sm text-gray-500">Priority: {feature.priority}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FeaturesSubTab;