import React from "react";

const phases = [
  { name: "Phase 1", deliverables: ["Deliverable 1", "Deliverable 2"] },
  { name: "Phase 2", deliverables: ["Deliverable 3", "Deliverable 4"] },
  { name: "Phase 3", deliverables: ["Deliverable 5", "Deliverable 6"] },
];

function PhasesTab() {
  return (
    <div className="mt-8 space-y-8">
      {phases.map((phase, index) => (
        <div key={index} className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-secondary">{phase.name}</h3>
          </div>
          <div className="border-t border-tertiary px-4 py-5 sm:p-0">
            <dl className="sm:divide-y sm:divide-tertiary">
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-quaternary">Deliverables</dt>
                <dd className="mt-1 text-sm text-secondary sm:mt-0 sm:col-span-2">
                  <ul className="border border-tertiary rounded-md divide-y divide-tertiary">
                    {phase.deliverables.map((deliverable, i) => (
                      <li key={i} className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                        {deliverable}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PhasesTab;