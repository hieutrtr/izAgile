import React from "react";

function QuestionsTab({ questions }) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Client Clarifications</h2>
      <div className="overflow-x-auto">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Question</th>
                <th scope="col" className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Assumption</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {questions?.map((question, index) => (
                <tr key={index}>
                  <td className="px-3 sm:px-6 py-4 text-sm text-gray-500 break-words">{question.question}</td>
                  <td className="px-3 sm:px-6 py-4 text-sm text-gray-900 break-words">{question.assumption}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default QuestionsTab;