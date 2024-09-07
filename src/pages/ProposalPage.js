import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from 'axios';
import FeaturesTab from "../components/proposal/FeaturesTab";
import PhasesTab from "../components/proposal/PhasesTab";
import QuestionsTab from "../components/proposal/QuestionsTab";

function ProposalPage() {
  const [activeTab, setActiveTab] = useState("features");
  const [projectName, setProjectName] = useState("");
  const [proposalData, setProposalData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const initialProposalData = location.state?.proposalData;

  useEffect(() => {
    const lastViewedProposal = JSON.parse(localStorage.getItem('lastViewedProposal'));
    if (lastViewedProposal) {
      setProposalData(lastViewedProposal);
      setProjectName(lastViewedProposal.project_name);
    }
  }, []);

  useEffect(() => {
    if (initialProposalData) {
      setProposalData(initialProposalData);
      setProjectName(initialProposalData.project_name);
      localStorage.setItem('lastViewedProposal', JSON.stringify(initialProposalData));
    }
  }, [initialProposalData]);

  const handleViewProposal = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.get(`${process.env.REACT_APP_PROJECT_SERVICE_URL}/api/proposals/project/${projectName}`);
      const newProposalData = response.data.proposal;
      setProposalData(newProposalData);
      localStorage.setItem('lastViewedProposal', JSON.stringify(newProposalData));
    } catch (error) {
      console.error('Error fetching proposal:', error);
      setError('Failed to fetch proposal. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleConfirm = async () => {
    if (!proposalData || !proposalData._id) {
      setError('No proposal data available. Please view a proposal first.');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post(`${process.env.REACT_APP_PROJECT_SERVICE_URL}/api/proposals/${proposalData._id}/features`);
      const detailedProposal = response.data;
      
      // Save the detailed proposal to localStorage
      localStorage.setItem('detailedProposal', JSON.stringify(detailedProposal));
      
      // Navigate to the FeaturesPage
      navigate('/features');
    } catch (error) {
      console.error('Error generating detailed proposal:', error);
      setError('Failed to generate detailed proposal. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const tabs = [
    { id: "features", label: "Features" },
    { id: "phases", label: "Phases" },
    { id: "questions", label: "Questions" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Proposal Information</h1>
        
        <div className="bg-white shadow-md rounded-lg overflow-hidden mb-8">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <input
                type="text"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                placeholder="Enter project name"
                className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:ring-indigo-500 focus:border-indigo-500"
              />
              <button
                onClick={handleViewProposal}
                disabled={isLoading}
                className="bg-indigo-600 text-white px-6 py-2 rounded-r-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
              >
                {isLoading ? 'Loading...' : 'View Proposal'}
              </button>
            </div>
            
            {error && (
              <p className="text-red-600 text-sm mt-2">{error}</p>
            )}
          </div>

          {proposalData && (
            <div>
              <div className="border-b border-gray-200">
                <nav className="-mb-px flex" aria-label="Tabs">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`${
                        activeTab === tab.id
                          ? 'border-indigo-500 text-indigo-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex-1 text-center`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </nav>
              </div>

              <div className="p-6">
                {activeTab === "features" && <FeaturesTab features={proposalData.features} />}
                {activeTab === "phases" && <PhasesTab phases={proposalData.project_phases} />}
                {activeTab === "questions" && <QuestionsTab questions={proposalData.client_clarifications} />}
              </div>

              <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                <button
                  onClick={handleConfirm}
                  disabled={isLoading}
                  className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
                >
                  {isLoading ? 'Processing...' : 'Confirm and Proceed'}
                </button>
              </div>
            </div>
          )}
        </div>

        {!proposalData && !isLoading && (
          <p className="text-center text-gray-600">No proposal data available. Please enter a project name and click "View Proposal".</p>
        )}
      </div>
    </div>
  );
}

export default ProposalPage;