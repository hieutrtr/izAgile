import React from "react";

function TeamSubTab({ team }) {
  return (
    <div className="mt-4">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Team</h3>
      <ul className="space-y-4">
        {team.map((member, index) => (
          <li key={index} className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <p className="text-sm text-gray-500">{member}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TeamSubTab;