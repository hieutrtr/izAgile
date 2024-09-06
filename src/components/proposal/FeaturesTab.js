import React from "react";

const features = [
  { name: "Feature 1", description: "Description of feature 1", priority: "High" },
  { name: "Feature 2", description: "Description of feature 2", priority: "Medium" },
  { name: "Feature 3", description: "Description of feature 3", priority: "Low" },
];

function FeaturesTab() {
  return (
    <div className="mt-8">
      <table className="min-w-full divide-y divide-tertiary">
        <thead className="bg-tertiary">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-secondary uppercase tracking-wider">Name</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-secondary uppercase tracking-wider">Description</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-secondary uppercase tracking-wider">Priority</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-tertiary">
          {features.map((feature, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-secondary">{feature.name}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-quaternary">{feature.description}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-quaternary">{feature.priority}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FeaturesTab;