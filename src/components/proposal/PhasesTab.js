import React from "react";

function PhasesTab({ phases }) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Project Phases</h2>
      {phases?.map((phase, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-lg font-medium">{phase.phase}</h3>
          <p className="text-sm text-gray-600">Duration: {phase.duration}</p>
          <ul className="list-disc list-inside">
            {phase.key_deliverables.map((deliverable, idx) => (
              <li key={idx} className="text-sm">{deliverable}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default PhasesTab;