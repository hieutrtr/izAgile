import React from "react";

function ConstraintsSubTab({ constraints }) {
  return (
    <div className="mt-4">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Constraints</h3>
      <ul className="space-y-4">
        {constraints.map((constraint, index) => (
          <li key={index} className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <p className="text-sm text-gray-500">{constraint}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ConstraintsSubTab;