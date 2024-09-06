import React from "react";

const membersData = {
  phase1: [
    { name: "Member 1", description: "Description of member 1" },
    { name: "Member 2", description: "Description of member 2" },
  ],
  phase2: [
    { name: "Member 3", description: "Description of member 3" },
    { name: "Member 4", description: "Description of member 4" },
  ],
  phase3: [
    { name: "Member 5", description: "Description of member 5" },
    { name: "Member 6", description: "Description of member 6" },
  ],
};

function MembersSubTab({ phaseId }) {
  const members = membersData[phaseId] || [];

  return (
    <div className="mt-4">
      <h3 className="text-lg font-medium text-secondary mb-4">Members for {phaseId}</h3>
      <ul className="space-y-4">
        {members.map((member, index) => (
          <li key={index} className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h4 className="text-lg leading-6 font-medium text-secondary">{member.name}</h4>
              <p className="mt-1 max-w-2xl text-sm text-quaternary">{member.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MembersSubTab;