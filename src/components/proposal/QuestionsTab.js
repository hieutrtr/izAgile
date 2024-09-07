import React from "react";

function QuestionsTab({ questions }) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Client Clarifications</h2>
      {questions?.map((question, index) => (
        <div key={index} className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Question</h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">{question.question}</p>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
            <p className="text-sm font-medium text-gray-500">Assumption</p>
            <p className="mt-1 text-sm text-gray-900">{question.assumption}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default QuestionsTab;