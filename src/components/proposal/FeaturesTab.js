import React from "react";

function FeaturesTab({ features }) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Features</h2>
      {features?.map((feature, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-lg font-medium">{feature.name}</h3>
          <p className="text-sm text-gray-600">{feature.description}</p>
          <p className="text-sm font-medium">Priority: {feature.priority}</p>
        </div>
      ))}
    </div>
  );
}

export default FeaturesTab;