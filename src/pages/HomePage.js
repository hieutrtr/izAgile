import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const [projectName, setProjectName] = useState('');
  const [projectRequirement, setProjectRequirement] = useState('');
  const [techStack, setTechStack] = useState('');
  const [owner, setOwner] = useState('');
  const navigate = useNavigate();

  const handleStartProject = async () => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_PROJECT_SERVICE_URL}/api/proposals`, {
        project_name: projectName,
        project_requirement: projectRequirement,
        tech_stack: techStack,
        owner: owner
      });
      console.log('Project created:', response.data);
      // Navigate to ProposalPage with the response data
      navigate('/proposal', { state: { proposalData: response.data.proposal } });
    } catch (error) {
      console.error('Error creating project:', error);
      // Handle error (e.g., show an error message to the user)
    }
  };

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden" style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}>
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-[512px] max-w-[512px] py-5 max-w-[960px] flex-1">
            <h1 className="text-[#111418] tracking-light text-[32px] font-bold leading-tight px-4 text-left pb-3 pt-6">Let's build your first feature with AI</h1>
            <p className="text-[#111418] text-base font-normal leading-normal pb-3 pt-1 px-4">We're excited to help you get started. Please fill out the form below and we'll be in touch shortly.</p>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-[#111418] text-base font-medium leading-normal pb-2">Your username</p>
                <input
                  placeholder="username"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111418] focus:outline-0 focus:ring-0 border border-[#dce0e5] bg-white focus:border-[#dce0e5] h-14 placeholder:text-[#637588] p-[15px] text-base font-normal leading-normal"
                  value={owner}
                  onChange={(e) => setOwner(e.target.value)}
                />
              </label>
            </div>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-[#111418] text-base font-medium leading-normal pb-2">Project name</p>
                <input
                  placeholder="Project name"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111418] focus:outline-0 focus:ring-0 border border-[#dce0e5] bg-white focus:border-[#dce0e5] h-14 placeholder:text-[#637588] p-[15px] text-base font-normal leading-normal"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                />
              </label>
            </div>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-[#111418] text-base font-medium leading-normal pb-2">Requirements</p>
                <textarea 
                placeholder="Tell us a bit about what you're trying to accomplish and how we can help. Include any relevant details about your data, use case, or business goals."
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111418] focus:outline-0 focus:ring-0 border border-[#dce0e5] bg-white focus:border-[#dce0e5] min-h-36 placeholder:text-[#637588] p-[15px] text-base font-normal leading-normal"
                value={projectRequirement}
                onChange={(e) => setProjectRequirement(e.target.value)}
                />
              </label>
            </div>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-[#111418] text-base font-medium leading-normal pb-2">Tech stack</p>
                <textarea 
                placeholder="What technology are you currently using?"
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111418] focus:outline-0 focus:ring-0 border border-[#dce0e5] bg-white focus:border-[#dce0e5] min-h-36 placeholder:text-[#637588] p-[15px] text-base font-normal leading-normal"
                value={techStack}
                onChange={(e) => setTechStack(e.target.value)}
                />
              </label>
            </div>
            <div className="flex px-4 py-3">
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 flex-1 bg-[#1972d2] text-white text-sm font-bold leading-normal tracking-[0.015em]" onClick={handleStartProject}>
                <span className="truncate">Start project</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;