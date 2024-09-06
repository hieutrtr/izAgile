import React, { useState } from "react";
import PhaseTab from "../components/features/PhaseTab";

const phases = [
  { id: "phase1", name: "Phase 1" },
  { id: "phase2", name: "Phase 2" },
  { id: "phase3", name: "Phase 3" },
];

function FeaturesPage() {
  const [activePhase, setActivePhase] = useState(phases[0].id);

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-secondary mb-6">Project Details</h1>
        
        <div className="mb-4 border-b border-tertiary">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            {phases.map((phase) => (
              <button
                key={phase.id}
                onClick={() => setActivePhase(phase.id)}
                className={`${
                  activePhase === phase.id
                    ? "border-primary text-primary"
                    : "border-transparent text-quaternary hover:text-secondary hover:border-quaternary"
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
              >
                {phase.name}
              </button>
            ))}
          </nav>
        </div>

        {phases.map((phase) => (
          activePhase === phase.id && <PhaseTab key={phase.id} phaseId={phase.id} />
        ))}
      </div>
    </div>
  );
}

export default FeaturesPage;