import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PhaseTab from "../components/features/PhaseTab";

function FeaturesPage() {
  const [detailedProposal, setDetailedProposal] = useState(null);
  const [activePhase, setActivePhase] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedProposal = JSON.parse(localStorage.getItem('detailedProposal'));
    if (storedProposal) {
      setDetailedProposal(storedProposal.proposal);
      if (storedProposal.phases && storedProposal.phases.length > 0) {
        setActivePhase(storedProposal.phases[0].name);
      }
    } else {
      navigate('/proposal');
    }
  }, [navigate]);

  if (!detailedProposal) {
    return <div>Loading...</div>;
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">{detailedProposal.project_name} - Project Details</h1>
        
        <div className="mb-4 border-b border-gray-200">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            {detailedProposal.phases.map((phase) => (
              <button
                key={phase.name}
                onClick={() => setActivePhase(phase.name)}
                className={`${
                  activePhase === phase.name
                    ? "border-indigo-500 text-indigo-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
              >
                {phase.name}
              </button>
            ))}
          </nav>
        </div>

        {detailedProposal.phases.map((phase) => (
          activePhase === phase.name && <PhaseTab key={phase.name} phase={phase} />
        ))}
      </div>
    </div>
  );
}

export default FeaturesPage;