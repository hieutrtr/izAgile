import React from "react";
import { useLocation } from "react-router-dom";
import FeaturesTab from "../components/proposal/FeaturesTab";
import PhasesTab from "../components/proposal/PhasesTab";
import QuestionsTab from "../components/proposal/QuestionsTab";

function ProposalPage() {
  const [activeTab, setActiveTab] = React.useState("features");
  const location = useLocation();
  const proposalData = location.state?.proposalData;

  const tabs = [
    { id: "features", label: "Features" },
    { id: "phases", label: "Phases" },
    { id: "questions", label: "Questions" },
  ];

  const handleConfirm = () => {
    // Add your logic here for processing the next step
    console.log("Confirming proposal and proceeding to next step");
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-secondary mb-6">Proposal Information</h1>
        
        <div className="mb-4 border-b border-tertiary">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`${
                  activeTab === tab.id
                    ? "border-primary text-primary"
                    : "border-transparent text-quaternary hover:text-secondary hover:border-quaternary"
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {activeTab === "features" && <FeaturesTab features={proposalData?.features} />}
        {activeTab === "phases" && <PhasesTab phases={proposalData?.project_phases} />}
        {activeTab === "questions" && <QuestionsTab questions={proposalData?.client_clarifications} />}

        <div className="mt-8 flex justify-end">
          <button
            onClick={handleConfirm}
            className="btn-confirm"
          >
            Confirm and Proceed
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProposalPage;