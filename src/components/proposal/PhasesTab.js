import React from "react";

function PhasesTab({ phases }) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Phases</h2>
      {phases?.map((phase, index) => (
        <div key={index} className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">{phase.phase}</h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">Duration: {phase.duration}</p>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
            <p className="text-sm font-medium text-gray-500 mb-2">Key Deliverables</p>
            <ul className="list-disc list-inside space-y-1">
              {phase.key_deliverables.map((deliverable, idx) => (
                <li key={idx} className="text-sm text-gray-900">{deliverable}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PhasesTab;